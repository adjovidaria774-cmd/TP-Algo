const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
rl.question("Température en Celsius: ",(c)=>{
    const celcius = Number(c);
    const fahrenheit = (celcius*9/5)+32;
    console.log( celcius + "°C ="+ fahrenheit + "°F");
    rl.close();
});