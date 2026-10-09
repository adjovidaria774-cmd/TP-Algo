const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Quel table veux-tu afficher? ", (reponse) =>{
const n= Number(reponse);
for(let i=1; i<= 10; i++){
    console.log(n+ "x" +i +"=" + (n*i));
}
rl.close();
});