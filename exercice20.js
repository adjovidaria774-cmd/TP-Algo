/**
 * exo 20: un jeu dans lequel le programme choisit aléatoirement entre 1 et 100.
 * L'utilisateur propose des nombres jusqu'à trouver la bonne réponse. Après chaque
 * tentative indique «Trop petit!» ou «Trop grand!».
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//FONCTION PRINCIPALE DU JEU 
function jouer() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let j = 0;
  console.log("=== DEVINE LE NOMBRE ===");
  console.log("J'ai choisi un nombre entre 1 et 100.");

  // DEMANDER UNE PROPOSITION
  function demander() {
    rl.question("Ta réponse : ", (reponse) => {
      const proposition = Number(reponse);

      // !Number.isInteger(proposition) remplace isNaN(proposition)
      // Il refuse le texte ET les décimaux (1.5)
      if (!Number.isInteger(proposition) || proposition < 1 || proposition > 100) {
        console.log("Entre un nombre entier valide entre 1 et 100.");
        demander();
        return;
      }

      // TENTATIVE VALIDE 
      j++;

      if (proposition < secret) {
        console.log("Trop petit !");
      } else if (proposition > secret) {
        console.log("Trop grand !");
      } else {
        console.log("Bravo ! Tu as trouvé !");
        console.log("Nombre de tentatives : " + j);
        rejouer();
        return;
      }

      if (j === 10) {
        console.log("Perdu ! Le nombre était " + secret);
        rejouer();
        return;
      }

      demander();
    });
  }

  demander();
}

// REJOUER avec vérification
function rejouer() {
  rl.question("Rejouer ? (o/n) : ", (r) => {
    const rep = r.trim().toLowerCase();

    if (rep === "o") {
      jouer();
    } else if (rep === "n") {
      rl.close();
    } else {
      // Ni "o" ni "n" : on redemande
      console.log("Erreur : tape o pour rejouer ou n pour quitter.");
      rejouer();
    }
  });
}

jouer();