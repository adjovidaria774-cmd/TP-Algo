/**
 * exo 7 : Demande deux nombres puis affiche le plus grand.
 * Si les deux sont identiques, indique qu'ils sont égaux.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const estTexteNonVide = (v) => String(v).trim() !== "";
const estNombre = (v) => estTexteNonVide(v) && Number.isFinite(Number(v));

const comparer = (first, second) => {
  if (!estNombre(first) || !estNombre(second)) {
    return null; // saisie invalide
  }

  const premierNombre = Number(first);
  const deuxiemeNombre = Number(second);

  if (premierNombre > deuxiemeNombre) {
    return "Le plus grand nombre est : " + premierNombre;
  } else if (premierNombre < deuxiemeNombre) {
    return "Le plus grand nombre est : " + deuxiemeNombre;
  } else {
    return "Ils sont égaux";
  }
};

rl.question("Premier nombre : ", (a) => {
  rl.question("Deuxième nombre : ", (b) => {
    const resultat = comparer(a, b);

    if (resultat === null) {
      console.log("Erreur : saisis deux nombres valides.");
    } else {
      console.log(resultat);
    }

    rl.close();
  });
});