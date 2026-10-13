/**
 *  exo 2 : Le programme demande deux nombres à l'utilisateur puis
 * affiche leur somme
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculateSum = (first, second) => {
    // vérifier si il s'agit bien d'un entier
  const texte1 = String(first).trim();
  const texte2 = String(second).trim();

  if (texte1 === "" || texte2 === "") {
    return null; // saisie vide, données invalide
  }

  const a = Number(texte1);
  const b = Number(texte2);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return null; //  ce n'est pas un entier
  }

  return a + b;
};

rl.question("Premier nombre : ", (a) => {
  rl.question("Deuxième nombre : ", (b) => {
    const resultat = calculateSum(a, b);

    if (resultat === null) {
      console.log("Erreur : saisis deux nombres entiers.");
    } else {
      console.log("La somme est : " + resultat);
    }

    rl.close();
  });
});

