/**
 * exo 4 : Demande une température en degrés Celsius
 * et la convertit en Fahrenheit.
 */

const readline = require("readline");

const celsiusVersFahrenheit = (valeur) => {
  // Vérification à l'intérieur de la fonction
  const estNombre = (v) =>
    String(v).trim() !== "" && Number.isFinite(Number(v));

  if (!estNombre(valeur)) {
    console.log("Erreur : saisis une température valide.");
    return;
  }

  const celsius = Number(valeur);
  const fahrenheit = (celsius * 9) / 5 + 32;

  console.log(celsius + "°C = " + fahrenheit + "°F");
};

module.exports = { celsiusVersFahrenheit };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Température en Celsius : ", (c) => {
    celsiusVersFahrenheit(c);
    rl.close();
  });
}