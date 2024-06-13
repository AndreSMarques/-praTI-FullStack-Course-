/*
    6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado. 
*/

const prompt = require("prompt-sync")();

let continuar;

do {

   

    continuar = (prompt("Deseja consultar outra velocidade ? [0]Não [1]Sim "));

} while (continuar == 1);