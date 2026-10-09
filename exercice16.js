const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Entrez un mot: ", (mot)=>{
    let estPalindrome= true
    for(let i=0; i< mot.length/ 2; i++){
        if(mot[i] !== mot[mot.length -1 -i]){
            estPalindrome = false
        }
    }
    if(estPalindrome){
        console.log('"' + mot + '"est un palindrome.');
    }else{
        console.log('"' + mot + '"n\'est pas un palidrome.');
    }
    rl.close();
});