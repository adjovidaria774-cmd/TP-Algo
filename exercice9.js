const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez N : ", (reponse)=>{
    const n= Number(reponse);
    for(let i= 1; i <=n; i++){
        console.log(i);
    }
    rl.close()
});