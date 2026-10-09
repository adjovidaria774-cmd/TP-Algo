const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Quel est ton prénom?", (prenom) =>{
    rl.question("Quel âge as-tu?",(age) =>{
        console.log("Bonjour " +prenom + ", tu as " + age+"ans.");
        rl.close();
    });
});