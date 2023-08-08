const prompt = require("prompt-sync")({ sigint: true });

let amayus = (texto) => texto.toUpperCase ();

let texto = prompt("ingresa un texto en minuscula: ");
let result = amayus(texto);

console.log(`tu texto en mayuscula es: ${result}`);



