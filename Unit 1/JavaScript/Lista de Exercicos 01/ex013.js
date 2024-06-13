/*
13- Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

const prompt = require("prompt-sync")();

console.log("====================");
console.log("§§§-tABUADA-§§§");
console.log("===================\n");

let valor = parseInt(prompt("Eu sei fazer tabuada, me fale um numero para você ver: "));

for(let i = 0; i <= 5; i++){
    console.log(`${i} x ${valor} = ${i * valor}`);
}



