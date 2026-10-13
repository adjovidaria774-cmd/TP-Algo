/**
 * exo 17: Demande combien de notes l'utilisateur voudrait saisir. Demande ensuite chaque note
 * une par une, stock les dans un tableau et calcule la somme et la moyenne.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// NOMBRE DE NOTES
rl.question("Combien de notes? ", (reponse) => {
  const nombre = Number(reponse);

  //  VERIFICATION DU NOMBRE DE NOTES
  // entier supérieur ou égal à 1
  if (!Number.isInteger(nombre) || nombre < 1) {
    console.log("Erreur : veuillez entrer un nombre entier supérieur ou égal à 1.");
    rl.close();
    return; // on arrête tout ici
  }

  //  LE TABLEAU ET LA FONCTION
  const notes = [];

  function demanderNote(numero) {

    //QUAND TOUTES LES NOTES SONT SAISIES
    if (numero > nombre) {
      let somme = 0;
      let nbSup10 = 0;

      for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
        if (notes[i] >= 10) {
          nbSup10++;
        }
      }
      console.log("Somme: " + somme);
      console.log("Moyenne: " + somme / notes.length);
      console.log("Notes >= 10 : " + nbSup10);
      rl.close();
      return;
    }

    // DEMANDE D'UNE NOTE
    rl.question("Note " + numero + ":", (n) => {
      const note = Number(n);

      //VERIFICATION DE LA NOTE 
      if (n.trim() === "" || isNaN(note)) {
        console.log("Erreur : veuillez entrer un nombre valide.");
        demanderNote(numero); // on redemande la même note
      } else {
        //NOTE VALIDE 
        notes.push(note);
        demanderNote(numero + 1);
      }
    });
  }

  demanderNote(1);
});