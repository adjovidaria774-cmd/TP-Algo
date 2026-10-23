/**
 *  Exercice 2 : Trier un tableau par ordre croissant
 */
function trierTableau(tableau) {
  // Vérification on doit recevoir un tableau
  if (!Array.isArray(tableau)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  // Vérification le tableau ne doit pas être vide
  if (tableau.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Copie du tableau 
  const resultat = [...tableau];

  // chaque élément doit être un vrai nombre
  for (const element of resultat) {
    if (typeof element !== "number" || !Number.isFinite(element)) {
      return "Erreur : le tableau doit contenir uniquement des nombres.";
    }
  }

  // pas de doublons
  if (new Set(resultat).size !== resultat.length) {
    return "Erreur : le tableau ne doit pas contenir de doublons.";
  }

  // Tri par insertion
  for (let i = 1; i < resultat.length; i++) {
    const valeur = resultat[i];
    let j = i - 1;

    while (j >= 0 && resultat[j] > valeur) {
      resultat[j + 1] = resultat[j];
      j--;
    }

    resultat[j + 1] = valeur;
  }

  return resultat;
}

module.exports = { trierTableau };

const readline = require("readline");

// Transforme la saisie (texte) en tableau de nombres, puis le trie
function trierSaisie(saisie) {
  const texte = String(saisie).trim();

// Vérification la saisie ne doit pas être vide
  if (texte === "") {
    return "Erreur : veuillez saisir au moins un nombre.";
  }
// On découpe le texte à chaque espace
  const morceaux = texte.split(" ");

// Chaque morceau doit être un nombre
  for (const morceau of morceaux) {
    if (morceau === "" || isNaN(Number(morceau))) {
      return "Erreur : veuillez saisir uniquement des nombres séparés par des espaces.";
    }
  }
// Conversion en nombre puis Tri
  return trierTableau(morceaux.map(Number));
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