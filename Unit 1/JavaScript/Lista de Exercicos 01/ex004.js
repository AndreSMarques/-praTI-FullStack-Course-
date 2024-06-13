/*
Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
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
}