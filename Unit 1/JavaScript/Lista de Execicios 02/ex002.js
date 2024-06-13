/*
    2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, 
    exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. 

*/
const prompt = require("prompt-sync")();
let continuar
do {

    let velocidadeCarro = parseInt(prompt("Que velocidade você está no momento ?"));

    if (velocidadeCarro > 80){
        let multa = (velocidadeCarro - 80) * 5
        console.log("Velocidade acima do permitido!!! Você foi multado em ", multa, "R$!!");
    }else{
        console.log("Você está na velocidade permitida da via. Uma boa viagem!!!!");
    }


    continuar = (prompt("Deseja consultar outra velocidade ? [0]Sim [1]Não "));

} while (continuar == 0);