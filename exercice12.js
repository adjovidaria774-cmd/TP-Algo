const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez N: " ,(nombre)=>{
    const n= Number(nombre);
    let somme = 0;
    let texte= "";
    for(let i=1; i<= n; i++){
        somme = somme+i
        texte = texte +i;
        if(i<n){
            texte = texte + "+";
        }
    }
    console.log(texte +"=" + somme);
    rl.close();
});