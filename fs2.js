const prompt = require("prompt-sync")({ sigint: true });

function convertir(palabra) {
  let url = `http://www.${palabra}.com`;
  return url;
}
let palabra = prompt("Ingresa la palabra:");
let result = convertir(palabra);

console.log(`tu palabra ${palabra} convertida a url es ${result} `);
