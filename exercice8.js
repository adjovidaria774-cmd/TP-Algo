/**
 * exo 8 : Demande trois nombres puis affiche le plus grand.
 */

const readline = require("readline");

const trouverPlusGrand = (a, b, c) => {
  const n1 = Number(a);
  const n2 = Number(b);
  const n3 = Number(c);

  // Vérification des saisies
  if (
    String(a).trim() === "" ||
    String(b).trim() === "" ||
    String(c).trim() === "" ||
    isNaN(n1) ||
    isNaN(n2) ||
    isNaN(n3)
  ) {
    console.log("Erreur : veuillez entrer uniquement des nombres valides.");
    return;
  }

  // Saisie valide
  let plusGrand = n1;

  if (n2 > plusGrand) {
    plusGrand = n2;
  }

  if (n3 > plusGrand) {
    plusGrand = n3;
  }

  console.log("Le plus grand nombre est : " + plusGrand);
};

module.exports = { trouverPlusGrand };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Premier nombre : ", (a) => {
    rl.question("Deuxième nombre : ", (b) => {
      rl.question("Troisième nombre : ", (c) => {
        trouverPlusGrand(a, b, c);
        rl.close();
      });
    });
  });
}