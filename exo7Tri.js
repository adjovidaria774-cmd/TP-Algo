/** Exercice 7 : Trier les notes des étudiants
 *  
 */

// Classe les étudiants de la meilleure note à la plus faible
function trierEtudiants(etudiants) {
  // on doit recevoir un tableau
  if (!Array.isArray(etudiants)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  // le tableau ne doit pas être vide
  if (etudiants.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Copie du tableau pour ne pas modifier l'original
  const resultat = [...etudiants];

  // Vérification chaque étudiant doit avoir un nom et une note valides
  for (const etudiant of resultat) {
    if (typeof etudiant !== "object" || etudiant === null || Array.isArray(etudiant)) {
      return "Erreur : chaque étudiant doit être un objet avec un nom et une note.";
    }
    if (typeof etudiant.nom !== "string" || etudiant.nom.trim() === "") {
      return "Erreur : chaque étudiant doit avoir un nom (texte non vide).";
    }
    if (typeof etudiant.note !== "number" || !Number.isFinite(etudiant.note)) {
      return "Erreur : chaque note doit être un nombre.";
    }
    if (etudiant.note < 0 || etudiant.note > 20) {
      return "Erreur : chaque note doit être comprise entre 0 et 20.";
    }
  }

  // Tri par insertion (de la meilleure note à la plus faible)
  for (let i = 1; i < resultat.length; i++) {
    const courant = resultat[i];
    let j = i - 1;

    // On décale vers la droite les étudiants ayant une note plus faible
    while (j >= 0 && resultat[j].note < courant.note) {
      resultat[j + 1] = resultat[j];
      j--;
    }

    // On place l'étudiant à sa position
    resultat[j + 1] = courant;
  }

  return resultat;
}

module.exports = { trierEtudiants };

const etudiants = [
  { nom: "Alice", note: 14 },
  { nom: "Bruno", note: 9 },
  { nom: "Carine", note: 18 },
  { nom: "David", note: 12 },
  { nom: "Emma", note: 16 },
];

console.log(trierEtudiants(etudiants));