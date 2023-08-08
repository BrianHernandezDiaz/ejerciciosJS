const prompt = require("prompt-sync")({ sigint: true });

function calculoedadperros(edad) {
  let edadperros = 7*edad;
  return edadperros;
}
let edad = prompt("Ingresa la edad humana del perro:");
let result = calculoedadperros(edad);

console.log(`la edad canina de tu perro es : ${result} `);
