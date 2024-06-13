/*. 01- Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
    Exemplos de dados de Entrada:
        150 (Temperatura em Celsius)
    Saida para a entrada acima:
        302 (Temperatura em Fahrenheit)
*/

const prompt = require("prompt-sync")();

console.log("=========================================");
console.log("§§§-CONVERSOR CELSIUS PARA FAHRENHEIT-§§§");
console.log("=========================================");

let temperaturaCelsius = parseInt(prompt("Insira a temperatura em Celsius: "));
let temperaturaFahrenheit = 32 + (9/5) * temperaturaCelsius;

console.log("Temperatura em Fahrenheit:", temperaturaFahrenheit);