/*
 10- Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require("prompt-sync")();

console.log("===========================");
console.log("§§§-IMPRIMINDO 10 VEZES-§§§");
console.log("==========================\n");


let numero = parseInt(prompt("Iforme um numero para a bricadeira: "));

for(let i = 0; i <= 10; i++){
    console.log(`Pocição:[${i}] - Numero digitado: ${numero}`);
}