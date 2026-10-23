/**
 * exo 19: Utilise le tableau [4, 8, 2, 8, 5, 8, 10, 3] puis demande à l'utilisateur
 * quel nombre il souhaite rechercher.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tableau = [4, 8, 2, 8, 5, 8, 10, 3];

rl.question("Quel nombre recherchez-vous ? ", (reponse) => {
  const recherche = Number(reponse);

  // Vérification refusé la saisie vide et tout ce qui n'est pas un nombre
  if (reponse.trim() === "" || isNaN(recherche)) {
    console.log("Erreur : veuillez entrer un nombre valide.");
  } else {
    // Saisie valide
    let j = 0;
    const positions = [];

    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] === recherche) {
        j++;
        positions.push(i);
      }
    }

    if (j=== 0) {
      console.log("Le nombre " + recherche + " n'existe pas dans le tableau.");
    } else {
      console.log("Le nombre " + recherche + " apparaît " + j + " fois.");
    }
  }
  rl.close();
});