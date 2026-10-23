/**Exercice 9 : Implémenter le tri fusion (Merge Sort)
 * 
 */

const readline = require("readline");

// Fusionne deux tableaux déjà triés en un seul tableau trié
function fusionner(gauche, droite) {
  const fusion = [];
  let i = 0;
  let j = 0;

  // On prend à chaque fois le plus petit des deux premiers éléments
  while (i < gauche.length && j < droite.length) {
    if (gauche[i] <= droite[j]) {
      fusion.push(gauche[i]);
      i++;
    } else {
      fusion.push(droite[j]);
      j++;
    }
  }

  // On ajoute ce qui reste dans l'un des deux tableaux
  while (i < gauche.length) {
    fusion.push(gauche[i]);
    i++;
  }
  while (j < droite.length) {
    fusion.push(droite[j]);
    j++;
  }

  return fusion;
}

// Fonction récursive : divise le tableau, trie chaque moitié, puis fusionne
function diviserEtFusionner(tableau) {
  // Cas de base : 0 ou 1 élément, déjà trié
  if (tableau.length <= 1) {
    return tableau;
  }

  // Division en deux moitiés
  const milieu = Math.floor(tableau.length / 2);
  const gauche = diviserEtFusionner(tableau.slice(0, milieu));
  const droite = diviserEtFusionner(tableau.slice(milieu));

  // Fusion des deux moitiés triées
  return fusionner(gauche, droite);
}

// Trie un tableau de nombres du plus petit au plus grand (tri fusion)
function triFusion(tableau) {
  // Vérification on doit recevoir un tableau
  if (!Array.isArray(tableau)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  //le tableau ne doit pas être vide
  if (tableau.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Copie du tableau pour ne pas modifier l'original
  const copie = [...tableau];

  //chaque élément doit être un vrai nombre
  for (const element of copie) {
    if (typeof element !== "number" || !Number.isFinite(element)) {
      return "Erreur : le tableau doit contenir uniquement des nombres.";
    }
  }

  // pas de doublons
  if (new Set(copie).size !== copie.length) {
    return "Erreur : le tableau ne doit pas contenir de doublons.";
  }

  return diviserEtFusionner(copie);
}

module.exports = { triFusion };

// Transforme la saisie en tableau de nombres, puis le trie
function trierSaisie(saisie) {
  const texte = String(saisie).trim();

  // la saisie ne doit pas être vide
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
  return triFusion(morceaux.map(Number));
}

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Entrez des nombres séparés par des espaces : ", (saisie) => 
    {
    console.log(trierSaisie(saisie));
    
    rl.close();
  });
}