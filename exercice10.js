/**
 * exo 10 : Demande un nombre de départ et effectue
 * le compte à rebours jusqu'à 0.
 */

const readline = require("readline");

const compteARebours = (n) => {
  const depart = Number(n);

  // Vérification
  if (
    String(n).trim() === "" ||
    !Number.isInteger(depart) ||
    depart < 0
  ) {
    console.log(
      "Erreur : veuillez entrer un nombre entier supérieur ou égal à 0."
    );
    return;
  }

  // Compte à rebours
  let i = depart;
  while (i >= 0) {
    console.log(i);
    i--;
  }
};

module.exports = { compteARebours };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Nombre de départ : ", (n) => {
    compteARebours(n);
    rl.close();
  });
}