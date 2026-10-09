const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Premier nombre: ", (a)=>{
    rl.question("Deuxième nombre: ", (b)=>{
        rl.question("Troisième nombre: ", (c)=>{
            const n1 = Number(a);
            const n2= Number(b);
            const n3 = Number(c);
        let plusGrand = n1;
        if(n2> plusGrand){
            plusGrand=n2;
        }
        if(n3>plusGrand){
            plusGrand=n3;
        }
        console.log("Le plus grand nombre est: " +plusGrand);
        rl.close();
        });
    });
});