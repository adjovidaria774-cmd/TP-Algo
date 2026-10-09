const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
const tableau = [4, 8, 2, 8, 5, 8, 10, 3];
rl.question("Quel nombre recherchez-vous ? ", (reponse) => {
  const recherche = Number(reponse);
  let compteur = 0;
  const positions = [];

  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === recherche) {
      compteur++;
      positions.push(i);
    }
  }
  if (compteur === 0) {
    console.log("Le nombre " + recherche + " n'existe pas dans le tableau.");
  } else {
    console.log("Le nombre " + recherche + " apparaît " + compteur + " fois.");
   }
  rl.close();
});