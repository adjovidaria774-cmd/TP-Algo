/**
 *  Exercice 1 : Trier trois nombres
 */
const readline = require("readline");

// Trie de trois nombres dans l'ordre croissant
function trierTroisNombres(x, y, z) {
  let a = Number(x);
  let b = Number(y);
  let c = Number(z);

  // Vérification des saisies
  if (
    String(x).trim() === "" || String(y).trim() === "" || String(z).trim() === "" ||
    !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)
  ) {
    return "Erreur : veuillez saisir trois nombres entiers.";
  }

  // Tri par échanges
  // 1. Le plus petit des deuxpremiers va dans (a)
  if (a > b) [a, b] = [b, a];
  // 2. Le plus grand des 3 descends jusqu'en (c)
  if (b > c) [b, c] = [c, b];
  //On met (a) et (b) dans l'ordre si besoin
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