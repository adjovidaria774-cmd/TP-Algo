/**
 * exo 5 : Demande un nombre entier à l'utilisateur
 * puis indique s'il est pair ou impair.
 */

const readline = require("readline");

const parite = (valeur) => {
  // Vérification à l'intérieur de la fonction
  const estEntier = (v) =>
    String(v).trim() !== "" && Number.isInteger(Number(v));

  if (!estEntier(valeur)) {
    console.log("Erreur : saisis un nombre entier.");
    return;
  }

  const nombre = Number(valeur);
  const resultat = nombre % 2 === 0 ? "pair" : "impair";

  console.log(nombre + " est " + resultat + ".");
};

module.exports = { parite };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez un nombre entier : ", (n) => {
    parite(n);
    rl.close();
  });
}