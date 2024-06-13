/*
8- Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")();

console.log("======================");
console.log("§§§-MENOR PRO MAIOR-§§§");
console.log("====================\n");

let valor1 = parseInt(prompt("Informe o primeieo Numero: "));
let valor2 = parseInt(prompt("Informe o Segundo Numero: "));

if(valor1 > valor2){
    console.log(`Odem cresente dos valores: ${valor2}, ${valor1}`);
}else {
    console.log(`Odem cresente dos valores: ${valor1}, ${valor2}`);
}