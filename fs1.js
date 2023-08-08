const prompt = require("prompt-sync")({ sigint: true });

function convertir(pulgadas) {
  let centimetros = pulgadas * 2.54;
  return centimetros;
}
let pulgadas = parseFloat(prompt("Ingresa pulgadas:"));
let centimetros = convertir(pulgadas);

console.log(`${pulgadas} pulgadas son ${centimetros} centímetros.`);
