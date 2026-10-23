/**
 * exo 2 : Le programme demande deux nombres à l'utilisateur puis
 * affiche leur somme.
 */

const readline = require("readline");

const calculateSum = (first, second) => {
  // vérifier s'il s'agit bien d'un entier
  const texte1 = String(first).trim();
  const texte2 = String(second).trim();

  if (texte1 === "" || texte2 === "") {
    console.log("Erreur : saisis deux nombres entiers."); // saisie vide
    return;
  }

  const a = Number(texte1);
  const b = Number(texte2);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.log("Erreur : saisis deux nombres entiers."); // pas un entier
    return;
  }

  console.log("La somme est : " + (a + b));
};

module.exports = { calculateSum };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Premier nombre : ", (a) => {
    rl.question("Deuxième nombre : ", (b) => {
      calculateSum(a, b);
      rl.close();
    });
  });
}