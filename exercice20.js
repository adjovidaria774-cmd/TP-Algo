const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let j= 0;
  console.log("=== DEVINE LE NOMBRE ===");
  console.log("J'ai choisi un nombre entre 1 et 100.");

  function demander() {
    rl.question("Ta réponse : ", (reponse) => {
      const proposition = Number(reponse);

      if (isNaN(proposition) || proposition < 1 || proposition > 100) {
        console.log("Entre un nombre valide entre 1 et 100.");
        demander();
        return;
      }

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

function rejouer() {
  rl.question("Rejouer ? (o/n) : ", (r) => {
    if (r.toLowerCase() === "o") {
      jouer();
    } else {
      rl.close();
    }
  });
}

jouer();