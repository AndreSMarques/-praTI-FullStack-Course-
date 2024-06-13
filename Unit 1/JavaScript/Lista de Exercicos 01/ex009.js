/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
                Codigo de origem
    1- Sul      5 ou 6  - Nordeste
    2- Norte    7, 8 ou 9 - Sudoeste
    3- Leste    10 até 24 - Centro-Oeste
    4- Oeste    25 até 50 - Nordeste

*/

const prompt = require("prompt-sync")();

console.log("============================");
console.log("§§§-DESCUBRINDO A REGIÃO-§§§");
console.log("===========================\n");

let valor = parseInt(prompt("Iforme o Codigo de Origem para saber a região, você pode digitar de 1 até 50: "));


if(valor >= 10 && valor <=24){
    console.log("A região é 'CENTRO-OESTE'");
}else if(valor >=25 && valor <=50){
    console.log("A região é 'NORDESTE'");
}else{
    switch (valor) {
        case 1:
            console.log("A região é 'SUL'");
            break;
        case 2:
            console.log("A região é 'NORTE'");
            break;
        case 3:
            console.log("A região é 'LESTE'");
            break;
        case 4:
            console.log("A região é 'OESTE'");
            break;
        case 5: case 6:
            console.log("A região é 'NORDESTE'");
            break;
        case 7: case 8: case 9:
            console.log("A região é 'SUDOESTE'");
            break;
        default:
            console.log("Região não encontrada");
            break;
    }
}
        