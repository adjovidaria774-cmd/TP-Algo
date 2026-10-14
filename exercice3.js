/**
 * exo 3 : Le programme demande deux nombres puis affiche
 * leur addition, soustraction, multiplication et division.
 */

const calculer = (first, second) => {
  // Vérifications à l'intérieur de la fonction
  const estNombre = (v) =>
    String(v).trim() !== "" && Number.isFinite(Number(v));

  if (!estNombre(first) || !estNombre(second)) {
    console.log("Erreur : saisis deux nombres valides.");
    return;
  }

  const x = Number(first);
  const y = Number(second);

  console.log("Addition : " + (x + y));
  console.log("Soustraction : " + (x - y));
  console.log("Multiplication : " + (x * y));

  if (y === 0) {
    console.log("Division impossible : le deuxième nombre vaut 0");
  } else {
    console.log("Division : " + (x / y));
  }
};

module.exports = { calculer };

if (require.main === module) {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Premier nombre : ", (a) => {
    rl.question("Deuxième nombre : ", (b) => {
      calculer(a, b);
      rl.close();
    });
  });
}