/**  Exercice 1 : Trier trois nombres
 *  
 */

const readline = require("readline");

// Trie trois nombres dans l'ordre croissant
function trierTroisNombres(x, y, z) {
  // Vérification : chaque saisie doit être un entier
  for (const valeur of [x, y, z]) {
    if (String(valeur).trim() === "" || !Number.isInteger(Number(valeur))) {
      return "Erreur : veuillez saisir trois nombres entiers.";
    }
  }
  // Conversion en nombres
  let a = Number(x);
  let b = Number(y);
  let c = Number(z);

  // Tri par échanges
  if (a > b) [a, b] = [b, a];
  if (b > c) [b, c] = [c, b];
  if (a > b) [a, b] = [b, a];

  return `${a} ${b} ${c}`;
}

module.exports = { trierTroisNombres };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Premier nombre : ", (x) => {
    rl.question("Deuxième nombre : ", (y) => {
      rl.question("Troisième nombre : ", (z) => {
        console.log(trierTroisNombres(x, y, z));
        rl.close(); 
      });
    });
  });
}