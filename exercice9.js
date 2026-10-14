/**
 * exo 9 : Demande un N puis affiche tous les nombres de 1 jusqu'à N.
 */

const readline = require("readline");

const compterJusquaN = (reponse) => {
  const n = Number(reponse);

  // Vérification
  if (!Number.isInteger(n) || n < 1) {
    console.log(
      "Erreur : veuillez entrer un nombre entier supérieur ou égal à 1."
    );
    return;
  }

  // Cas valide
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

module.exports = { compterJusquaN };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez N : ", (reponse) => {
    compterJusquaN(reponse);
    rl.close();
  });
}