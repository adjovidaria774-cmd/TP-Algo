/**
 * exo 9: Demande un N puis affiche tous les nombres de 1 jusqu'à N.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez N : ", (reponse) => {
  const n = Number(reponse);
 // Vérification
  if (!Number.isInteger(n) || n < 1) {
    console.log("Erreur : veuillez entrer un nombre entier supérieur ou égal à 1.");
  } else {
    //Cas valide
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  rl.close();
});