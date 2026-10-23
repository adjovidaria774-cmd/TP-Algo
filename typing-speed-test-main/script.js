// Durée du mode chronométré en secondes
const TIMED_DURATION = 60;

// Clé de sauvegarde du record dans localStorage
const BEST_KEY = "typingSpeedTestBest";

//  Récupération des éléments 

// Écrans principaux : test et résultats
const testView = document.getElementById("test-view");
const resultsView = document.getElementById("results-view");

// Texte à recopier et champ de saisie invisible
const passageEl = document.getElementById("passage");
const hiddenInput = document.getElementById("hidden-input");

// Écran de démarrage, zone du bouton de relance et confettis
const startEl = document.getElementById("start");
const restartEl = document.getElementById("restart");
const confettiEl = document.getElementById("confetti");

// Boutons de démarrage et de relance
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const againBtn = document.getElementById("again-btn");

// Statistiques en direct et record dans l'en-tête
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const timeEl = document.getElementById("time");
const bestEl = document.getElementById("best");

// Éléments de l'écran de résultats
const resultsIcon = document.getElementById("results-icon");
const resultsTitle = document.getElementById("results-title");
const resultsText = document.getElementById("results-text");
const resWpm = document.getElementById("res-wpm");
const resAccuracy = document.getElementById("res-accuracy");
const resCorrect = document.getElementById("res-correct");
const resWrong = document.getElementById("res-wrong");

// Boutons de réglage : difficulté et mode
const difficultyBtns = document.querySelectorAll("[data-difficulty]");
const modeBtns = document.querySelectorAll("[data-mode]");

// Variables du test
// Passages chargés depuis data.json
let passages = null;

// Réglages choisis par l'utilisateur
let difficulty = "hard";
let mode = "timed";

// Texte à recopier et saisie de l'utilisateur
let text = "";
let typed = "";

// Compteurs de frappes (les erreurs corrigées restent comptées)
let totalKeystrokes = 0;
let errorKeystrokes = 0;

// Gestion du temps
let running = false;
let startTime = 0;
let timerId = null;

// Calculs 

// Secondes écoulées depuis le démarrage
function getElapsedSeconds() {
  return (Date.now() - startTime) / 1000;
}

// Ajout d'un zéro devant les nombres à un chiffre (5 devient 05)
function pad(number) {
  return String(number).padStart(2, "0");
}

// Nombre de caractères tapés correctement
function countCorrect() {
  let count = 0;

  // Comparaison de chaque caractère tapé avec le caractère attendu
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === text[i]) {
      count++;
    }
  }

  return count;
}

// Calcul des mots par minute
function computeWpm() {
  // Minimum d'une seconde pour éviter des valeurs absurdes au début
  let seconds = getElapsedSeconds();
  if (seconds < 1) {
    seconds = 1;
  }

  // Un mot vaut 5 caractères
  const words = countCorrect() / 5;
  const minutes = seconds / 60;

  return Math.round(words / minutes);
}

// Calcul de la précision en pourcentage
function computeAccuracy() {
  // 100 % tant qu'aucune touche n'est tapée
  if (totalKeystrokes === 0) {
    return 100;
  }

  // Part des frappes sans erreur
  const goodKeystrokes = totalKeystrokes - errorKeystrokes;
  return Math.round((goodKeystrokes / totalKeystrokes) * 100);
}

// Affichage 

// Affichage du record dans l'en-tête
function showBest() {
  const best = localStorage.getItem(BEST_KEY);

  // 0 tant qu'aucun record n'existe
  if (best === null) {
    bestEl.textContent = 0;
  } else {
    bestEl.textContent = best;
  }
}

// Coloration de chaque caractère du passage selon la saisie
function updatePassage() {
  const spans = passageEl.children;

  for (let i = 0; i < spans.length; i++) {
    if (i < typed.length) {
      // Caractère déjà tapé : correct ou incorrect
      if (typed[i] === text[i]) {
        spans[i].className = "correct";
      } else {
        spans[i].className = "incorrect";
      }
    } else if (i === typed.length) {
      // Prochain caractère à taper : curseur
      spans[i].className = "current";
    } else {
      // Caractère pas encore atteint : aucun style
      spans[i].className = "";
    }
  }
}

// Mise à jour des trois statistiques en direct
function updateStats() {
  wpmEl.textContent = computeWpm();
  accuracyEl.textContent = computeAccuracy() + "%";

  const seconds = getElapsedSeconds();

  if (mode === "timed") {
    // Mode chronométré : temps restant, sans descendre sous zéro
    let remaining = Math.ceil(TIMED_DURATION - seconds);
    if (remaining < 0) {
      remaining = 0;
    }
    timeEl.textContent = "0:" + pad(remaining);
  } else {
    // Mode passage : temps écoulé en minutes et secondes
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);
    timeEl.textContent = minutes + ":" + pad(secondsLeft);
  }
}

// Bascule de l'interface entre « avant le test » et « test en cours »
function setRunningUI(on) {
  if (on) {
    // Test en cours : texte net, bouton de relance visible, stats colorées
    passageEl.classList.remove("is-blurred");
    startEl.hidden = true;
    restartEl.hidden = false;
    testView.classList.add("is-active");
  } else {
    // Avant le test : texte flou, écran de démarrage visible, stats neutres
    passageEl.classList.add("is-blurred");
    startEl.hidden = false;
    restartEl.hidden = true;
    testView.classList.remove("is-active");
  }
}

//Cycle de vie du test 

// Préparation d'un nouveau test sans le démarrer
function resetTest() {
  // Arrêt du chrono
  clearInterval(timerId);
  running = false;
  startTime = Date.now();

  // Remise à zéro de la saisie
  typed = "";
  hiddenInput.value = "";

  // Remise à zéro des compteurs
  totalKeystrokes = 0;
  errorKeystrokes = 0;

  // Choix d'un passage au hasard selon la difficulté
  const list = passages[difficulty];
  const randomIndex = Math.floor(Math.random() * list.length);
  text = list[randomIndex].text;

  // Création d'un <span> par caractère du passage
  passageEl.innerHTML = "";
  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    passageEl.appendChild(span);
  }

  // Retour à l'écran de test, sans résultats ni confettis
  resultsView.hidden = true;
  confettiEl.hidden = true;
  testView.hidden = false;

  // Affichage de l'état « avant démarrage »
  setRunningUI(false);
  updatePassage();
  updateStats();
}

// Action répétée toutes les 250 ms pendant le test
function tick() {
  updateStats();

  // Fin du test si le temps est écoulé en mode chronométré
  if (mode === "timed" && getElapsedSeconds() >= TIMED_DURATION) {
    endTest();
  }
}

// Démarrage du test (bouton, clic sur le texte ou première touche tapée)
function startTest() {
  // Rien à faire si le test est déjà lancé
  if (running) {
    return;
  }

  // Lancement du chrono
  running = true;
  startTime = Date.now();
  timerId = setInterval(tick, 250);

  // Passage à l'affichage « test en cours »
  setRunningUI(true);

  // Focus sur le champ de saisie pour recevoir les frappes
  hiddenInput.focus();
}

// Fin du test et affichage des résultats
function endTest() {
  // Calcul du score avant d'arrêter le chrono
  updateStats();
  const wpm = computeWpm();

  // Comparaison avec le record précédent
  const best = localStorage.getItem(BEST_KEY);
  const isFirst = best === null;
  const isRecord = !isFirst && wpm > Number(best);

  // Arrêt du chrono et de la saisie
  clearInterval(timerId);
  running = false;
  hiddenInput.blur();

  // Variables qui recevront le titre et le message
  let title, message;

  // Premier test : message de départ
  if (isFirst) {
    title = "Baseline Established!";
    message = "You've set the bar. Now the real challenge begins — time to beat it.";
  // Record battu : message de célébration
  } else if (isRecord) {
    title = "High Score Smashed!";
    message = "You're getting faster. That was incredible typing.";
  // Sinon : test normal
  } else {
    title = "Test Complete!";
    message = "Solid run. Keep pushing to beat your high score.";
  }

  // Affichage du titre et du message dans la page
  resultsTitle.textContent = title;
  resultsText.textContent = message;

  // Record battu : icône étoile, plus grande, et confettis visibles
  if (isRecord) {
    resultsIcon.src = "./assets/images/icon-new-pb.svg";
    resultsIcon.width = 80;
    confettiEl.hidden = false;
  // Sinon : icône de coche et confettis cachés
  } else {
    resultsIcon.src = "./assets/images/icon-completed.svg";
    resultsIcon.width = 64;
    confettiEl.hidden = true;
  }

  // Affichage des MPM dans la première carte
  resWpm.textContent = wpm;

  // Affichage de la précision dans la deuxième carte
  resAccuracy.textContent = computeAccuracy() + "%";

  // Affichage des caractères corrects et des erreurs dans la troisième carte
  resCorrect.textContent = countCorrect();
  resWrong.textContent = errorKeystrokes;

  // Sauvegarde du score s'il s'agit du premier test ou d'un record
  if (isFirst || isRecord) {
    localStorage.setItem(BEST_KEY, wpm);
  }

  // Affichage de l'écran des résultats
  showBest();
  testView.hidden = true;
  resultsView.hidden = false;
}

// Saisie

// Traitement de chaque modification du champ de saisie caché
function handleInput() {
  // Démarrage automatique à la première frappe
  startTest();

  // Saisie limitée à la longueur du passage
  const value = hiddenInput.value.slice(0, text.length);

  // Comptage des nouvelles frappes uniquement (les suppressions ne comptent pas)
  for (let i = typed.length; i < value.length; i++) {
    totalKeystrokes++;

    // Une frappe différente du caractère attendu est une erreur
    if (value[i] !== text[i]) {
      errorKeystrokes++;
    }
  }

  // Mise à jour de la saisie et du champ
  
  typed = value;
  hiddenInput.value = value;

  // Mise à jour de l'affichage
  updatePassage();
  updateStats();

  // Fin du test quand tout le passage est tapé
  if (typed.length === text.length) {
    endTest();
  }
}

// ---------- Événements 

// Saisie dans le champ invisible
hiddenInput.addEventListener("input", handleInput);

// Démarrage par le bouton ou par un clic sur le texte
startBtn.addEventListener("click", startTest);
passageEl.addEventListener("click", startTest);

// Relance par le bouton « Restart Test » ou « Go Again »
restartBtn.addEventListener("click", resetTest);
againBtn.addEventListener("click", resetTest);

// Clic sur un bouton de difficulté
for (const button of difficultyBtns) {
  button.addEventListener("click", function () {
    // Enregistrement de la difficulté choisie
    difficulty = button.dataset.difficulty;

    // Seul le bouton cliqué reste sélectionné
    for (const other of difficultyBtns) {
      other.setAttribute("aria-pressed", other === button);
    }

    // Nouveau test avec la nouvelle difficulté
    resetTest();
  });
}

// Clic sur un bouton de mode
for (const button of modeBtns) {
  button.addEventListener("click", function () {
    // Enregistrement du mode choisi
    mode = button.dataset.mode;

    // Seul le bouton cliqué reste sélectionné
    for (const other of modeBtns) {
      other.setAttribute("aria-pressed", other === button);
    }

    // Nouveau test avec le nouveau mode
    resetTest();
  });
}

// Initialisation 

// Chargement des passages puis préparation du premier test
async function init() {
  showBest();

  const response = await fetch("./data.json");
  passages = await response.json();
  resetTest();
}

init();