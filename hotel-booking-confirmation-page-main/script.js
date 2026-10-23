// Menu mobile 

const sidebar = document.querySelector('#sidebar');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
  // toggle ajoute la classe is-open si elle est absente, la retire sinon, et renvoie true si elle vient d'être ajoutée
  const open = sidebar.classList.toggle('is-open');

  // Informe les lecteurs d'écran de l'état du menu
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

//Copie du mot de passe Wi-Fi 

const copy = document.querySelector('.copy');

// async car la copie dans le presse-papiers n'est pas instantanée
copy.addEventListener('click', async () => {
  try {
    // await attend la fin de la copie avant de passer à la suite
    await navigator.clipboard.writeText(document.querySelector('#wifi-password').textContent);
    copy.textContent = 'Copied';
  } catch {
    // Le navigateur peut refuser la copie, par exemple hors connexion sécurisée
    copy.textContent = 'Failed';
  }

  // Remet le texte d'origine après 2 secondes
  setTimeout(() => (copy.textContent = 'Copy'), 2000);
});

// Impression du reçu 

// Ouvre la fenêtre d'impression du navigateur
document.querySelector('#print').addEventListener('click', () => window.print());