const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Premier nombre: ", (a)=>{
    rl.question("Deuxième nombre: ", (b)=>{
        const premierNombre= Number(a);
        const deuxiemeNombre= Number(b);
        if(Number(b)>Number(a)){
            console.log("Le plus grand nombre est: " +deuxiemeNombre);
        }else if(Number(b)<Number(a)){
            console.log("Le plus grand nomre est:" +premierNombre);
        }else{
            console.log("Ils sont égaux");
        }
        rl.close();
    });
});