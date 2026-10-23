/** Exercice 5 : Implémenter le tri par sélection (Selection Sort)
 *  
 */

const readline = require("readline");
function triSelection(tableau) {
  //on doit recevoir un tableau
  if (!Array.isArray(tableau)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  //le tableau ne doit pas être vide
  if (tableau.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Copie du tableau 
  const resultat = [...tableau];

  //chaque élément doit être un vrai nombre
  for (const element of resultat) {
    if (typeof element !== "number" || !Number.isFinite(element)) {
      return "Erreur : le tableau doit contenir uniquement des nombres.";
    }
  }

  //pas de doublons
  if (new Set(resultat).size !== resultat.length) {
    return "Erreur : le tableau ne doit pas contenir de doublons.";
  }

  // Tri par sélection (ordre décroissant)
  for (let i = 0; i < resultat.length - 1; i++) {
    // On cherche la position du plus grand élément de la partie non triée
    let indiceMax = i;

    for (let j = i + 1; j < resultat.length; j++) {
      if (resultat[j] > resultat[indiceMax]) {
        indiceMax = j;
      }
    }

    // On le place à la position i
    if (indiceMax !== i) {
      [resultat[i], resultat[indiceMax]] = [resultat[indiceMax], resultat[i]];
    }
  }

  return resultat;
}

module.exports = { triSelection };

// Transforme la saisie en tableau de nombresnpuis le trie
function trierSaisie(saisie) {
  const texte = String(saisie).trim();

  //la saisie ne doit pas être vide
  if (texte === "") {
    return "Erreur : veuillez saisir au moins un nombre.";
  }

  // On découpe le texte à chaque espace
  const morceaux = texte.split(" ");

  // chaque morceau doit être un nombre
  for (const morceau of morceaux) {
    if (morceau === "" || isNaN(Number(morceau))) {
      return "Erreur : veuillez saisir uniquement des nombres séparés par des espaces.";
    }
  }

  // Conversion en nombres puis tri
  return triSelection(morceaux.map(Number));
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