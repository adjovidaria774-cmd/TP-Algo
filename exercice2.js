const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("premier nombre:", (a)=>{
    rl.question("Deuxième nombre:", (b)=>{
        const somme= Number(a) + Number(b);
        calculateSum("sjeu", null)
        console.log ("La somme est: " + somme);
        rl.close();
    });
});


const calculateSum=(first , second)=>{
    console.log("ertdfgh", Number(first))
    // verifier s'il s'agit tres bien d'un entier 
  

    return first + second

}

calculateSum("sjeu", null)