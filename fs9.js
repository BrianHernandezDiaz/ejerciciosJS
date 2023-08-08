const prompt = require("prompt-sync")({ sigint: true });

let calculocircunferencia = (radio) =>2*Math.PI* radio;

let radio = prompt("ingresa el radio del circulo: ");
let result = calculocircunferencia(radio);

console.log(`la circunferencia del circulo de radio ${radio} es: ${result}`);



