/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias
*/

const prompt = require("prompt-sync")();

let continuar
do {
    let cigarrosFumados = parseInt(prompt("Quantos cigarrinhos meu fi fuma por dia ?"));
    let anosFumando = parseInt(prompt("E a quantos anos meu fi fuma ?"));

    let diasFumados = anosFumando * 365;
    let quantidadeCigarrosFumados = diasFumados * cigarrosFumados;
    let minutosGastosFuamndo = quantidadeCigarrosFumados * 10;

    let anosPerdidosFumando = minutosGastosFuamndo / 60 / 24 / 365;
    console.log("Parabêns você conseguiu perder "+ anosPerdidosFumando.toFixed(2) + " Como se sente?");
    continuar = (prompt("Deseja consultar outra velocidade ? [0]Sim [1]Não "));

}while(continuar == 0);
