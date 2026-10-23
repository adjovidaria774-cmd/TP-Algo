/**
 * exo 16: Demande un mot et détermine si il se lit de la même manière dans les deux sens.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez un mot: ", (mot) => {

  // un mot : uniquement des lettres, au moins une
  if (!/^[a-zA-ZÀ-ÿ]+$/.test(mot)) {
    console.log("Erreur : veuillez entrer un mot (lettres uniquement, sans espace).");
  } else {
    
    let estPalindrome = true;

    for (let i = 0; i < mot.length / 2; i++) {
      if (mot[i] !== mot[mot.length - 1 - i]) {
        estPalindrome = false;
      }
    }

    if (estPalindrome) {
      console.log('"' + mot + '" est un palindrome.');
    } else {
      console.log('"' + mot + '" n\'est pas un palindrome.');
    }
  }

  rl.close();
});