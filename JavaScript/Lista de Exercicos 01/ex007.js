/* 
07- As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

*/

const prompt = require("prompt-sync")();

console.log("======================");
console.log("§§§-COMPRANDO MAÇÃS-§§§");
console.log("====================\n");

let QuantidadeMaca = parseFloat(prompt("Quantas maçãs você deseja comprar ?"));
let valor;

if(QuantidadeMaca < 12){
    valor = QuantidadeMaca * 0.30;
    valor.toFixed(2);
    console.log(`Você comprou ${QuantidadeMaca} maçâs. O total foi de: ${valor}R$ Obrigado pela a compra!`);
}else{
    valor = QuantidadeMaca * 0.25;
    valor.toFixed(2);
    console.log(`Você comprou ${QuantidadeMaca} maçâs. O total foi de: ${valor}R$ Obrigado pela a compra!`);
}