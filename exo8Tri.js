/**Exercice 8 : Trier des produits selon leur prix
 *  
 */

const readline = require("readline");

// Trie les produits par prix, selon l'ordre choisi ("croissant" ou "decroissant")
function trierProduits(produits, ordre) {
  // Vérification : on doit recevoir un tableau
  if (!Array.isArray(produits)) {
    return "Erreur : veuillez fournir un tableau.";
  }

  // le tableau ne doit pas être vide
  if (produits.length === 0) {
    return "Erreur : le tableau est vide.";
  }

  // Vérification l'ordre doit être un texte
  if (typeof ordre !== "string") {
    return "Erreur : veuillez choisir croissant ou decroissant.";
  }

  // On enlève les espaces et on met en minuscules
  const choix = ordre.trim().toLowerCase();

  // Vérification le choix doit être croissant ou décroissant
  if (choix !== "croissant" && choix !== "decroissant" && choix !== "décroissant") {
    return "Erreur : veuillez choisir croissant ou decroissant.";
  }

  // Copie du tableau pour ne pas modifier l'original
  const resultat = [...produits];

  // Vérification de chaque produit doit avoir un nom et un prix valides
  for (const produit of resultat) {
    if (typeof produit !== "object" || produit === null || Array.isArray(produit)) {
      return "Erreur : chaque produit doit être un objet avec un nom et un prix.";
    }
    if (typeof produit.nom !== "string" || produit.nom.trim() === "") {
      return "Erreur : chaque produit doit avoir un nom (texte non vide).";
    }
    if (typeof produit.prix !== "number" || !Number.isFinite(produit.prix)) {
      return "Erreur : chaque prix doit être un nombre.";
    }
    if (produit.prix < 0) {
      return "Erreur : un prix ne peut pas être négatif.";
    }
  }

  const croissant = choix === "croissant";

  // Tri par insertion
  for (let i = 1; i < resultat.length; i++) {
    const courant = resultat[i];
    let j = i - 1;

    // On décale vers la droite les produits qui sont mal placés
    while (
      j >= 0 &&
      (croissant ? resultat[j].prix > courant.prix : resultat[j].prix < courant.prix)
    ) {
      resultat[j + 1] = resultat[j];
      j--;
    }

    // On place le produit à sa position
    resultat[j + 1] = courant;
  }

  return resultat;
}

module.exports = { trierProduits };

const produits = [
  { nom: "Clavier", prix: 15000 },
  { nom: "Souris", prix: 5000 },
  { nom: "Écran", prix: 85000 },
  { nom: "Casque", prix: 12000 },
  { nom: "Webcam", prix: 25000 },
];

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Ordre de tri (croissant ou decroissant) : ", (ordre) => {
    console.log(trierProduits(produits, ordre));
    rl.close(); 
  });
}