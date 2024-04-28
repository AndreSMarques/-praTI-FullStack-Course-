/*
02 - Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.

Exemplos de dados de Entrada:
    200 (Quantidade de Eleitores)
    10 (Votos em branco)
    20 (votos nulos)
    160 (votos validos)
Saida para a entrada acima:
    5 (percentual de votos em branco)
    10 (Percentural de votos nulos)
    80 (Percetual de votos validos)
*/




const prompt = require("prompt-sync")();

console.log("=========================+");
console.log("§§§-PERCETUAL DE VOTOS-§§§");
console.log("==========================\n");

let numeroEleitores = parseInt(prompt("Iforme o numero de 'Eleitores': "));
let votoBranco = parseInt(prompt("Iforme o numero de votos em 'Branco': "));
let votoNulo = parseInt(prompt("Iforme o numero de votos em 'Nulo': "));
let votoValido = parseInt(prompt("Iforme o numero de votos 'Validos': "));

votoBranco = (votoBranco / numeroEleitores) * 100;
votoNulo = (votoNulo / numeroEleitores) * 100;
votoValido = (votoValido / numeroEleitores) * 100;

console.log(`\nNumero de eleitores: ${numeroEleitores}\nPercetual de votos em Brancos: ${votoBranco}%\nPercetual de votos Nulos: ${votoNulo}%\nPercetual de votos Validos: ${votoValido}%`);