// Récupération du bouton du menu dans le HTML
const button = document.querySelector(".menu-button");
// Récupération du panneau du menu (les 5 liens)
const menu = document.querySelector(".menu");
// Récupération du fond assombri
const overlay = document.querySelector(".overlay");
// Récupération de l'image à l'intérieur du bouton (l'icône)
const icon = button.querySelector("img");

// Fonction qui ouvre le menu
function openMenu() {
  menu.hidden = false;
  overlay.hidden = false;
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "Close menu");
  // Remplace l'icône ≡ par l'icône ✕
  icon.src = "./assets/images/icon-close.svg";
}

// Fonction qui ferme le menu
function closeMenu() {
  menu.hidden = true;
  overlay.hidden = true;
  button.setAttribute("aria-expanded", "false");
  // Remet le texte d'aide du bouton en "Open menu"
  button.setAttribute("aria-label", "Open menu");
  icon.src = "./assets/images/icon-menu.svg";
}

// Clic sur le bouton : le code suivant s'exécute
button.addEventListener("click", () => {
  // Si le menu est caché...
  if (menu.hidden) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Clic sur le fond assombri : le menu se ferme
overlay.addEventListener("click", closeMenu);

// Appui sur une touche du clavier : le code suivant s'exécute
document.addEventListener("keydown", (event) => {
  // Si la touche est Échap ET que le menu est ouvert...
  if (event.key === "Escape" && !menu.hidden) {
    closeMenu();
    button.focus();
  }
});