const prompt = require("prompt-sync")({ sigint: true });

function imc(peso, estatura) {
  let imc = peso / (estatura * estatura);
  return imc;
}

let continuar = "si";

while (continuar == "si") {
  let peso = prompt("Ingresa tu peso en kg:");
  let estatura = prompt("Ingresa tu estatura en metros:");
  let result = imc(peso, estatura);

  console.log(`Tu IMC es: ${result}`);

  continuar = prompt("¿Deseas seguir calculando el IMC? (si/no):");
}
console.log("adios joven")

