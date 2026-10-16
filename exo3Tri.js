/** Exercice 3 : Trier un tableau par ordre décroissant
 *  
 */
const readline = require("readline");
function trierTableauDecroissant(tableau) {
  // Vérification : on doit recevoir un tableau
  if (!Array.isArray(tableau)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  // Vérification le tableau ne doit pas être vide
  if (tableau.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Copie du tableau pour ne pas modifier l'original
  const resultat = [...tableau];

  //chaque élément doit être un entier
  for (const element of resultat) {
    if (typeof element !== "number" || !Number.isInteger(element)) {
      return "Erreur : le tableau doit contenir uniquement des entiers.";
    }
  }

  // pas de doublons
  if (new Set(resultat).size !== resultat.length) {
    return "Erreur : le tableau ne doit pas contenir de doublons.";
  }

  // Tri par insertion ordre décroissant
  for (let i = 1; i < resultat.length; i++) {
    const valeur = resultat[i];
    let j = i - 1;

    // On décale vers la droite les éléments plus petits
    while (j >= 0 && resultat[j] < valeur) {
      resultat[j + 1] = resultat[j];
      j--;
    }

    // On place la valeur à sa position
    resultat[j + 1] = valeur;
  }

  return resultat;
}
 module.exports = { trierTableauDecroissant };

// Transforme la saisie en tableau d'entiers puis le trie
function trierSaisie(saisie) {
  const texte = String(saisie).trim();

  // Vérification la saisie ne doit pas être vide
  if (texte === "") {
    return "Erreur : veuillez saisir au moins un entier.";
  }

  // On découpe le texte à chaque espace
  const morceaux = texte.split(" ");

  // Vérification chaque morceau doit être un nombre
  for (const morceau of morceaux) {
    if (morceau === "" || isNaN(Number(morceau))) {
      return "Erreur : veuillez saisir uniquement des entiers séparés par des espaces.";
    }
  }
  // Conversion en nombres puis tri
  return trierTableauDecroissant(morceaux.map(Number));
}
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez des entiers séparés par des espaces : ", (saisie) => {
    console.log(trierSaisie(saisie));
    rl.close();
  });
}