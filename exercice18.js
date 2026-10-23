/**
 *  exo 18: A partir du tableau[12,5,27,8,3,19,42,7]trouve le plus petit et
 *  le plus grand nombre en pacourant le tableau.
 */



const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
const nombres= [12, 5, 27, 3, 8, 19, 42, 7];

let minimum= nombres[0];
let maximum= nombres[0];

for(let i = 1;i< nombres.length; i++){
    if(nombres[i]<minimum){
        minimum= nombres[i];
    }
    if(nombres[i]>maximum){
        maximum= nombres[i];
    }
}
console.log("Minimum: " + minimum);
console.log("Maximum: " + maximum);
rl.close();