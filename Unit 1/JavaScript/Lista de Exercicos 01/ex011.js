/*
11- Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

const prompt = require("prompt-sync")();

console.log("====================");
console.log("§§§-IMPAR OU PAR-§§§");
console.log("===================\n");

let valor;

do {
    valor = parseInt(prompt("Infome um valor para saber se é impar ou par: "));
    if(valor % 2 === 0){
        console.log(`O numero ${valor} é Par`);
    }else {
        console.log(`O numero ${valor} é Impar`);
    }
} while (valor > 0);