const prompt = require("prompt-sync")({ sigint: true });

let type = (parametro) =>typeof parametro;

let parametro = prompt("ingresa un parametro: ");
let result = type(parametro);

console.log(`tu parametro es tipo: ${result}`);



