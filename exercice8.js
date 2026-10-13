/**
 * exo 8: Demande trois nombres et détermine lequel est le plus grand.
 */


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Premier nombre: ", (a) => {
  rl.question("Deuxième nombre: ", (b) => {
    rl.question("Troisième nombre: ", (c) => {
      const n1 = Number(a);
      const n2 = Number(b);
      const n3 = Number(c);

      // Vérification des saisies
      if (
        a.trim() === "" || b.trim() === "" || c.trim() === "" ||
        isNaN(n1) || isNaN(n2) || isNaN(n3)
      ) {
        // ERREUR Saisie non valide
        console.log("Erreur : veuillez entrer uniquement des nombres valides.");
      } else {
    //Saisie valide
        let plusGrand = n1;

        if (n2 > plusGrand) {
          plusGrand = n2;
        }

        if (n3 > plusGrand) {
          plusGrand = n3;
        }

        console.log("Le plus grand nombre est: " + plusGrand);
      }

      rl.close();

    }); 
  }); 
}); 