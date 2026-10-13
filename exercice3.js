/**
 *  exo 3: Le programme demande de saisie deux nombres puis affiche
 * leur addition, soustraction, multiplication, et division.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const estTexteNonVide = (v) => String(v).trim() !== "";
const estNombre = (v) => estTexteNonVide(v) && Number.isFinite(Number(v));

const calculer = (first, second) => {
  if (!estNombre(first) || !estNombre(second)) {
    return null; // saisie invalide
  }

  const x = Number(first);
  const y = Number(second);

  return {
    somme: x + y,
    soustraction: x - y,
    multiplication: x * y,
    division: y === 0 ? null : x / y,
  };
};

rl.question("Premier nombre : ", (a) => {
  rl.question("Deuxième nombre : ", (b) => {
    const resultat = calculer(a, b);

    if (resultat === null) {
      console.log("Erreur : saisis deux nombres valides.");
    } else {
      console.log("Addition : " + resultat.somme);
      console.log("Soustraction : " + resultat.soustraction);
      console.log("Multiplication : " + resultat.multiplication);

      if (resultat.division === null) {
        console.log("Division impossible : le deuxième nombre vaut 0");
      } else {
        console.log("Division : " + resultat.division);
      }
    }

    rl.close();
  });
});