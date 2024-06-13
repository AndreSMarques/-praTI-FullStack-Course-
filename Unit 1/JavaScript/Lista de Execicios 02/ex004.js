/*
    4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, 
    para três segmentos formarem um triângulo, 
    o comprimento de cada lado deve ser menor que a soma dos outros dois. 
*/

const prompt = require("prompt-sync")();

let continuar;



do {

    let numeroUm = parseInt(prompt("Informe o primeiro numero: "));
    let numeroDois = parseInt(prompt("Informe o segundo numero: "));
    let numeroTres = parseInt(prompt("Informe o terceiro numero: "));
   

    if (numeroUm < numeroDois+numeroTres && numeroDois < numeroUm + numeroTres && numeroTres < numeroUm + numeroDois) {
        console.log("Eba!!! É possivel criar um trinagulo com os numeros informados");
    }else{
        console.log("Ops... Parece que os numeros informados não podem formar um triangulo, que tal tentar novamente :)");
    }

    continuar = (prompt("Deseja consultar outra velocidade ? [0]Não [1]Sim "));


} while (continuar == 1);