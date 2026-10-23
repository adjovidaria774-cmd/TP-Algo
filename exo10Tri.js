/**Exercice 10 : Comparer les performances des algorithmes de tri
 * 
 */

const { performance } = require("perf_hooks");

// Génère un tableau de nombres entiers aléatoires entre 0 et 9999
function genererTableau(taille) {
  // Vérification la taille doit être un entier strictement positif
  if (!Number.isInteger(taille) || taille <= 0) {
    return "Erreur : la taille doit être un entier strictement positif.";
  }

  const tableau = [];
  for (let i = 0; i < taille; i++) {
    tableau.push(Math.floor(Math.random() * 10000));
  }

  return tableau;
}

// Tri à bulles (modifie le tableau reçu)
function triBulles(tableau) {
  for (let i = 0; i < tableau.length - 1; i++) {
    for (let j = 0; j < tableau.length - 1 - i; j++) {
      if (tableau[j] > tableau[j + 1]) {
        [tableau[j], tableau[j + 1]] = [tableau[j + 1], tableau[j]];
      }
    }
  }
  return tableau;
}

// Tri par sélection (modifie le tableau reçu)
function triSelection(tableau) {
  for (let i = 0; i < tableau.length - 1; i++) {
    let indiceMin = i;

    for (let j = i + 1; j < tableau.length; j++) {
      if (tableau[j] < tableau[indiceMin]) {
        indiceMin = j;
      }
    }

    if (indiceMin !== i) {
      [tableau[i], tableau[indiceMin]] = [tableau[indiceMin], tableau[i]];
    }
  }
  return tableau;
}

// Tri par insertion (modifie le tableau reçu)
function triInsertion(tableau) {
  for (let i = 1; i < tableau.length; i++) {
    const valeur = tableau[i];
    let j = i - 1;

    while (j >= 0 && tableau[j] > valeur) {
      tableau[j + 1] = tableau[j];
      j--;
    }

    tableau[j + 1] = valeur;
  }
  return tableau;
}

// Mesure le temps de chaque algorithme sur une copie identique du tableau
function comparerAlgorithmes(tableau) {
  //on doit recevoir un tableau
  if (!Array.isArray(tableau)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  // le tableau ne doit pas être vide
  if (tableau.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // chaque élément doit être un vrai nombre
  for (const element of tableau) {
    if (typeof element !== "number" || !Number.isFinite(element)) {
      return "Erreur : le tableau doit contenir uniquement des nombres.";
    }
  }

  const algorithmes = [
    { nom: "Tri à bulles", fonction: triBulles },
    { nom: "Tri par sélection", fonction: triSelection },
    { nom: "Tri par insertion", fonction: triInsertion },
  ];

  const resultats = [];

  for (const algorithme of algorithmes) {
    // Chaque algorithme reçoit sa propre copie du même tableau
    const copie = [...tableau];

    const debut = performance.now();
    algorithme.fonction(copie);
    const fin = performance.now();

    resultats.push({
      algorithme: algorithme.nom,
      temps_ms: Number((fin - debut).toFixed(3)),
    });
  }

  return resultats;
}

module.exports = { genererTableau, comparerAlgorithmes };

if (require.main === module) {
  const tableau = genererTableau(1000);
  console.table(comparerAlgorithmes(tableau));
}