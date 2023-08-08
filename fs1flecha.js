const prompt = require("prompt-sync")({ sigint: true });

let convertir = (pulgadas) => pulgadas*2.54;

let pulgadas = parseFloat(prompt("Ingresa pulgadas:"));
let centimetros = convertir(pulgadas);

console.log(`${pulgadas} pulgadas son ${centimetros} centímetros.`);
