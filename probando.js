const prompt = require("prompt-sync")({ sigint: true });

let edad = 25

console.log( edad )

let nombre = prompt ("Ingrese su nombre: ");

console.log(`Hola ${nombre}!!!`);