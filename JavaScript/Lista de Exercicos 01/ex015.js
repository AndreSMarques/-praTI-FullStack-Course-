/*
15- Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const prompt = require("prompt-sync")();

console.log("====================");
console.log("§§§-IMPAR OU PAR-§§§");
console.log("===================\n");

let somaPeso = 0; 
let somaNumero = 0;
let contator = 0;

let numero = parseFloat(prompt("Informe uma ou digite [0] para sair: "));

while(numero != 0){
    let peso = parseFloat(prompt("Infome o peso da nota: "));
    contator++
    somaPeso += peso;
    somaNumero += numero * peso;
    numero = parseFloat(prompt("Informe uma ou digite [0] para sair: "));
}

let mediaPonderada = somaNumero / somaPeso;

console.log(mediaPonderada.toFixed(2));