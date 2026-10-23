/** Exercice 4 : Implémenter le tri à bulles (Bubble Sort)
 *  
 */

const readline = require("readline");
function triBulles(tableau) {
  // on doit recevoir un tableau
  if (!Array.isArray(tableau)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  // le tableau ne doit pas être vide
  if (tableau.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Copie du tableau
  const resultat = [...tableau];

  //  chaque élément doit être un vrai nombre
  for (const element of resultat) {
    if (typeof element !== "number" || !Number.isFinite(element)) {
      return "Erreur : le tableau doit contenir uniquement des nombres.";
    }
  }

  // pas de doublons
  if (new Set(resultat).size !== resultat.length) {
    return "Erreur : le tableau ne doit pas contenir de doublons.";
  }

  // Tri à bulles
  for (let i = 0; i < resultat.length - 1; i++) {
    let echange = false;

    // À chaque passage, le plus grand élément restant remonte à la fin
    for (let j = 0; j < resultat.length - 1 - i; j++) {
      // Si ils sont dans le mauvais ordre, on les échange
      if (resultat[j] > resultat[j + 1]) {
        [resultat[j], resultat[j + 1]] = [resultat[j + 1], resultat[j]];
        echange = true;
      }
    }

    // Aucun échange : le tableau est déjà trié, on s'arrête
    if (!echange) {
      break;
    }
  }

  return resultat;
}

module.exports = { triBulles };

// Transforme la saisie en tableau de nombres puis le trie
function trierSaisie(saisie) {
  const texte = String(saisie).trim();

  // Vérification : la saisie ne doit pas être vide
  if (texte === "") {
    return "Erreur : veuillez saisir au moins un nombre.";
  }

  const morceaux = texte.split(" ");

 //chaque morceau doit être un nombre
  for (const morceau of morceaux) {
    if (morceau === "" || isNaN(Number(morceau))) {
      return "Erreur : veuillez saisir uniquement des nombres séparés par des espaces.";
    }
  }

  // Conversion en nombres puis tri
  return triBulles(morceaux.map(Number));
}

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez des nombres séparés par des espaces : ", (saisie) => {
    console.log(trierSaisie(saisie));
    rl.close();
  });
}