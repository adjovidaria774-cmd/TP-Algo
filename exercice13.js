/**
 * exo 13: Demande un entier positif et devine combien de chiffres il contient
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez un nombre: ", (nbre) => {
  let nombre = Number(nbre);

  if (nbre.trim() === "" || !Number.isInteger(nombre) || nombre < 0) {
    console.log("Erreur : veuillez entrer un entier positif.");
  } else {

    let i = 0;
    if (nombre === 0) {
      i = 1;
    }

    while (nombre > 0) {
      nombre = Math.floor(nombre / 10);
      i++;
    }
     console.log("Ce nombre contient " + i + " chiffres");
  }
  rl.close();
});