/**
 * exo 6 : Demande un nombre puis détermine s'il est positif, négatif ou égal à 0.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const estTexteNonVide = (v) => String(v).trim() !== "";
const estNombre = (v) => estTexteNonVide(v) && Number.isFinite(Number(v));

const signe = (valeur) => {
  if (!estNombre(valeur)) {
    return null; // saisie invalide
  }

  const nombre = Number(valeur);

  if (nombre > 0) {
    return "positif";
  } else if (nombre < 0) {
    return "négatif";
  } else {
    return "égal à 0";
  }
};

rl.question("Entrez un nombre : ", (n) => {
  const resultat = signe(n);

  if (resultat === null) {
    console.log("Erreur : saisis un nombre valide.");
  } else {
    console.log("Le nombre est " + resultat);
  }

  rl.close();
});