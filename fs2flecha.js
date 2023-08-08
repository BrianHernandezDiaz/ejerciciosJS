const prompt = require("prompt-sync")({ sigint: true });

let convertir = (palabra) => `http://www.${palabra}.com`

let palabra = prompt("Ingresa la palabra:");
let result = convertir(palabra);

console.log(`tu palabra ${palabra} convertida a url es ${result} `);
