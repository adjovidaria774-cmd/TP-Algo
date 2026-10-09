const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Combien de notes? ", (reponse)=>{
    const nombre= Number(reponse);
    const notes = [];

    function demanderNote(numero){
        if(numero>nombre){
            let somme = 0;
            let nbSup10 = 0;

            for (let i=0; i< notes.length; i++){
                somme = somme + notes[i];
            if(notes[i]>= 10){
                nbSup10++;
            }
            }
            console.log("Somme: " +somme);
            console.log("Moyenne:" + somme/notes.length);
            console.log("Notes >= 10 : " +nbSup10);
            rl.close();
            return;    
        }
        rl.question("Note " + numero + ":", (n)=>{
            notes.push(Number(n));
            demanderNote(numero + 1);
        });
    }
    demanderNote(1);
});