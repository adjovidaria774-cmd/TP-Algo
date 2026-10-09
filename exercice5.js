const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez un nombre: ", (n)=> {
const nombre = Number(n);
if (nombre %2===0){
    console.log(nombre +" est paire.");
}else{
    console.log(nombre +" est impaire.");
}
rl.close();
});