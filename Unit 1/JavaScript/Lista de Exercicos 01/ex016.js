/*
16- Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

const prompt = require("prompt-sync")();

console.log("==============================");
console.log("§§§-PRIMOS MAIORES QUE 100-§§§");
console.log("==============================\n");

let numeros = 101;
let contator = 0;
let i = 2;

while (contator < 50 && i * i <= numeros) {
    let primo = true;
  
    while (i * i <= numeros && primo) {
      if (numeros % i === 0) {
        primo = false;
      }
      i++;
    }
  
    if (primo) {
      console.log(numeros);
      contator++;
    }
  
    numeros++;
    i = 2;
  }