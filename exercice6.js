/**
 * exo 6 : Demande un nombre puis détermine s'il est
 * positif, négatif ou égal à 0.
 */

const readline = require("readline");

const signe = (valeur) => {
  // Vérification à l'intérieur de la fonction
  const estNombre = (v) =>
    String(v).trim() !== "" && Number.isFinite(Number(v));

  if (!estNombre(valeur)) {
    console.log("Erreur : saisis un nombre valide.");
    return;
  }

  const nombre = Number(valeur);

  if (nombre > 0) {
    console.log("Le nombre est positif");
  } else if (nombre < 0) {
    console.log("Le nombre est négatif");
  } else {
    console.log("Le nombre est égal à 0");
  }
};

module.exports = { signe };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez un nombre : ", (n) => {
    signe(n);
    rl.close();
  });
}