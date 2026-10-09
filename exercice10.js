const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Nombre de départ: ",(n)=>{
    const depart= Number(n);
    let i =depart;
    while(i>=0){
        console.log(i);
        i--;
    }
    rl.close();
});