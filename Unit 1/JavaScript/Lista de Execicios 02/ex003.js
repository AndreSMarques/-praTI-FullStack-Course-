/*
    3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, 
    cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas. 
*/

const prompt = require("prompt-sync")();

let continuar;
let valorPassagem;

do {

    let distanciaPecorrer = parseInt(prompt("Qual distancia você deja pecorrer ? "));

    if (distanciaPecorrer <= 200) {
        valorPassagem = distanciaPecorrer * 0.50;
    }else {
        valorPassagem = distanciaPecorrer * 0.45;
    }

    console.log("O valor da sua passagem é: ", valorPassagem);

    continuar = (prompt("Deseja consultar outra distancia ? [0]Sim [1]Não "));

} while (continuar == 0);