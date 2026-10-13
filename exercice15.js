/**
 * exo 15: Demande une phrase et compte le nombre de voyelles qu'elle contient.
 * Considère a,e,i,u,o,y comme voyelles.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez une phrase: ", (ph) => {

  // Vérification une phrase qui contient au moins une lettre
  if (!/[a-zA-ZÀ-ÿ]/.test(ph)) {
    console.log("Erreur : veuillez entrer une phrase contenant des lettres.");
  } else {
    const voyelles = "aeiouy"; 
    const texte = ph.toLowerCase();
    let i = 0;

    for (let j = 0; j < texte.length; j++) {
      if (voyelles.includes(texte[j])) {
        i++;
      }
    }

    console.log("Nombre de voyelles: " + i);
  }

  rl.close();
});