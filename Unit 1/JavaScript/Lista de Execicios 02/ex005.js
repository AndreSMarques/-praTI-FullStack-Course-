/*
    5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). 
*/

const prompt = require("prompt-sync")();
let jokenpo = Math.random() * 3 + 1;



let continuar;

do {

   console.log(jokenpo);

    continuar = (prompt("Deseja consultar outra velocidade ? [0]Não [1]Sim "));

} while (continuar == 1);