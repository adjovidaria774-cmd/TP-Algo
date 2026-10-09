const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez un nombre: ", (n)=> {
    const nombre = Number(n);
    if(nombre >0){
        console.log("Le nombre est positif");
    }else if(nombre <0){
         console.log("Le nombre est négatif");
    }else{
        console.log("Le nombre est égal à 0");
    }
    rl.close();
})