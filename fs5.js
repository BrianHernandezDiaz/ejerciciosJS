const prompt = require("prompt-sync")({ sigint: true });

function sueldoahora(sueldo) {
  let tasahora = sueldo/40;
  return tasahora;
}
let sueldo = prompt("Ingresa tu sueldo mensual:");
let result = sueldoahora(sueldo);

console.log(`el valor de tu hora de trabajo es : ${result} `);
