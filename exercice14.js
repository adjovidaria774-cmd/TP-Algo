const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez un nombre: ", (reponse)=>{
    let inverse = "";
    for(let i= reponse.length-1; i>=0;i--){
        inverse= inverse + reponse[i];
    }
    console.log("Nombre inversé: " + inverse);
    rl.close();
});