/*
03- Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.

*/
const prompt = require("prompt-sync")();

console.log("=================");
console.log("§§§-OPERAÇÕES-§§§");
console.log("===============\n");

let numero1 = parseInt(prompt("Iforme o primerio valor: "));
let numero2 = parseInt(prompt("Iforme o segundo valor: "));
let numero3 = parseInt(prompt("Iforme o terceiro valor: "));
let numero4;

numero4 = numero1 + numero2 + numero3;
numero1 += 25;
numero2 *= 3;
numero3 = numero3 - (numero3 * 0.12);

console.log(`\nprimeiro inteiro: ${numero1}\nSegundo inteiro: ${numero2}\nTerceiro inteiro: ${numero3}\nQuarto inteiro: ${numero4}\n`);
