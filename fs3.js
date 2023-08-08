const prompt = require("prompt-sync")({ sigint: true });

function convertir(frase) {
  let admiracion = `${frase}!`;
  return admiracion;
}
let frase = prompt("Ingresa una frase:");
let result = convertir(frase);

console.log(`tu frase con admiración: ${result} `);
