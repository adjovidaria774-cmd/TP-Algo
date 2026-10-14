/**
 * exo 7 : Demande deux nombres puis affiche le plus grand.
 * Si les deux sont identiques, indique qu'ils sont égaux.
 */

const readline = require("readline");

const comparer = (first, second) => {
  // Vérification à l'intérieur de la fonction
  const estNombre = (v) =>
    String(v).trim() !== "" && Number.isFinite(Number(v));

  if (!estNombre(first) || !estNombre(second)) {
    console.log("Erreur : saisis deux nombres valides.");
    return;
  }

  const premierNombre = Number(first);
  const deuxiemeNombre = Number(second);

  if (premierNombre > deuxiemeNombre) {
    console.log("Le plus grand nombre est : " + premierNombre);
  } else if (premierNombre < deuxiemeNombre) {
    console.log("Le plus grand nombre est : " + deuxiemeNombre);
  } else {
    console.log("Ils sont égaux");
  }
};

module.exports = { comparer };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Premier nombre : ", (a) => {
    rl.question("Deuxième nombre : ", (b) => {
      comparer(a, b);
      rl.close();
    });
  });
}