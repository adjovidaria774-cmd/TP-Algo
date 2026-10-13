/**
 *  exo 4 :Demande une température en dégré celcius et la convertis en Fahrenheit. 
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const estTexteNonVide = (v) => String(v).trim() !== "";
const estNombre = (v) => estTexteNonVide(v) && Number.isFinite(Number(v));

const celsiusVersFahrenheit = (valeur) => {
  if (!estNombre(valeur)) {
    return null; // saisie invalide
  }

  const celsius = Number(valeur);
  return (celsius * 9) / 5 + 32;
};

rl.question("Température en Celsius : ", (c) => {
  const fahrenheit = celsiusVersFahrenheit(c);

  if (fahrenheit === null) {
    console.log("Erreur : saisis une température valide.");
  } else {
    console.log(Number(c) + "°C = " + fahrenheit + "°F");
  }

  rl.close();
});