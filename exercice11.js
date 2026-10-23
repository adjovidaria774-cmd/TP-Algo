/**
 * exo 11: Demande un nombre et affiche sa table de multiplication de 1 jusqu'à 10.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quel table veux-tu afficher? ", (reponse) => {
  const n = Number(reponse);

  // Vérification
  // On refuse la saisie vide et tout ce qui n'est pas un nombre
  if (reponse.trim() === "" || isNaN(n)) {
    console.log("Erreur : veuillez entrer un nombre valide.");
  } else {
    // Saisie valide
    for (let i = 1; i <= 10; i++) {
      console.log(n + " x " + i + " = " + (n * i));
    }
  }
  rl.close();
});