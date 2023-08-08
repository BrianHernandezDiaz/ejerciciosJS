const prompt = require("prompt-sync")({ sigint: true });

let convertir = (frase) => `${frase}!`

let frase = prompt("Ingresa una frase:");
let result = convertir(frase);

console.log(`tu frase con admiración: ${result} `);
