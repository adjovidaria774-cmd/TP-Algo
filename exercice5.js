/**
 *  exo 5:Demande un nombre entier à l'utilisateur puis indique 
 * si il est paire ou impaire.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const estTexteNonVide = (v) => String(v).trim() !== "";
const estEntier = (v) => estTexteNonVide(v) && Number.isInteger(Number(v));

const parite = (valeur) => {
  if (!estEntier(valeur)) {
    return null; // saisie invalide
  }

  return Number(valeur) % 2 === 0 ? "pair" : "impair";
};

rl.question("Entrez un nombre entier : ", (n) => {
  const resultat = parite(n);

  if (resultat === null) {
    console.log("Erreur : saisis un nombre entier.");
  } else {
    console.log(Number(n) + " est " + resultat + ".");
  }

  rl.close();
});