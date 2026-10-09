const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez une phrase: ", (ph)=>{
    const voyelles= "aeiouy";
    const texte = ph.toLowerCase();
    let i= 0;
    
    for(let j=0; j<texte.length;j++){
        if(voyelles.includes(texte[j])){
            i++;
        }
    }
    console.log("Nombre de voyelles: " +i);
    rl.close();
});