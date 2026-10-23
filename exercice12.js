/**
 * exo 12: Demande un entier positif N puis calcule la somme 1+2+3+4+...+N
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez N: ", (nombre) => {
  const n = Number(nombre);

  
  // Vérificatio entier positif (1 ou plus)
  if (!Number.isInteger(n) || n < 1) {
    console.log("Erreur : veuillez entrer un entier positif (1 ou plus).");
  } else {
    let somme = 0;
    let texte = "";

    for (let i = 1; i <= n; i++) {
      somme = somme + i;
      texte = texte + i;
      if (i < n) {
        texte = texte + "+";
      }
    }
       console.log(texte + "=" + somme);
  }
  rl.close();
});