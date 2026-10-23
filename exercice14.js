/**
 * exo 14: Demande un nombre puis affiche ses chiffres dans le sens inverse.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez un nombre: ", (reponse) => {

  // On veut uniquement des chiffres (0 à 9), au moins un
  if (!/^[0-9]+$/.test(reponse)) {
    console.log("Erreur : veuillez entrer un nombre entier positif (chiffres uniquement).");
  } else {
    let inverse = "";

    for (let i = reponse.length - 1; i >= 0; i--) {
      inverse = inverse + reponse[i];
    }

    console.log("Nombre inversé: " + inverse);
  }

  rl.close();
});