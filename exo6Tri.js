/** Exercice 6 : Implémenter le tri par insertion (Insertion Sort)
 *  
 */
const readline = require("readline");
const { triBulles } = require("./exo4Tri.js"); // résultat de l'exercice 4

// Transforme une saisie en tableau de nombres
function versNombres(saisie) {
  const texte = String(saisie).trim();

  // la saisie ne doit pas être vide
  if (texte === "") {
    return "Erreur : veuillez saisir au moins un nombre.";
  }

  // On découpe le texte à chaque espace
  const morceaux = texte.split(" ");

  //chaque morceau doit être un nombre
  for (const morceau of morceaux) {
    if (morceau === "" || isNaN(Number(morceau))) {
      return "Erreur : veuillez saisir uniquement des nombres séparés par des espaces.";
    }
  }

  return morceaux.map(Number);
}

// Trie le tableau de départ (tri à bulles), puis insère chaque nouveau nombre à sa position
function triInsertion(saisieTableau, saisieNouveaux) {
  // Vérification des deux saisies
  const tableau = versNombres(saisieTableau);
  if (!Array.isArray(tableau)) {
    return tableau;
  }

  const nouveaux = versNombres(saisieNouveaux);
  if (!Array.isArray(nouveaux)) {
    return nouveaux;
  }

  // Tableau de départ trié avec l'exercice 4 (renvoie un message si erreur)
  const resultat = triBulles(tableau);
  if (!Array.isArray(resultat)) {
    return resultat;
  }

  // Insertion de chaque nouvel élément parmi les éléments déjà triés
  for (const valeur of nouveaux) {
    // Vérification : nombre fini et pas de doublon
    if (!Number.isFinite(valeur) || resultat.includes(valeur)) {
      return "Erreur : les nombres à insérer doivent être valides et sans doublons.";
    }

    let j = resultat.length - 1;

    // On décale vers la droite les éléments plus grands
    while (j >= 0 && resultat[j] > valeur) {
      resultat[j + 1] = resultat[j];
      j--;
    }

    // On place la valeur à sa position
    resultat[j + 1] = valeur;
  }

  return resultat;
}

module.exports = { triInsertion };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Tableau de départ (séparé par des espaces) : ", (saisieTableau) => {
    rl.question("Nombres à insérer (séparés par des espaces) : ", (saisieNouveaux) => {
      console.log(triInsertion(saisieTableau, saisieNouveaux));
      rl.close();
    });
  });
}