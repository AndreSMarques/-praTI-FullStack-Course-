/*
14- Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

console.log("=========++===========");
console.log("§§§-MEDIA DAS NOTA-§§§");
console.log("===========++========\n");

let continuar = 1;
let contator =0;
let soma = 0;

while(continuar !== 0){
    let numero = parseInt(prompt("Informe o numero para o calculo: "));
    contator ++;
    soma += numero; 
    continuar = parseInt(prompt("Deseja continuar? [1]Sim [0]Não: "));
}

let media = soma / contator;
console.log(soma);
console.log(contator);
console.log(media);
