/*
Acrescente ao exercício 04 a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

const prompt = require("prompt-sync")();

console.log("=================");
console.log("§§§-MÉDIA ALUNO-§§§");
console.log("===============\n");

let nota01 = parseFloat(prompt("Qual a primeria nota do aluno? "));
let nota02 = parseFloat(prompt("Qual a segunda nota do aluno? "));

media = (nota01 + nota02) / 2;

if(media >= 6){
    console.log("'PARABÉNS!' Você foi aprovado sua nota foi:", media);
}else{
    console.log("'Você foi REPROVADO!' Estudar mais, sua nota foi:", media);
}