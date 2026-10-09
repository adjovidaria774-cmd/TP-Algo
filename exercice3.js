const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Premier nombre:", (a)=>{
    rl.question("Deuxième nombre:", (b)=>{
        const somme= Number(a) + Number(b);
        const soustraction= Number(a) - Number(b);
        const multiplication= Number(a)*Number(b);
        const division= Number(a)/Number(b);
        console.log ("Addition: " + somme);
        console.log ("Soustraction: " + soustraction);
        console.log("Multiplication: "+ multiplication);
        if(Number(b)=== 0){
            console.log("Division impossible : Le deuxième nombre vaut 0");
            } else{
                console.log("Division: "+ division);
            }
        
        
        rl.close();
    });
});