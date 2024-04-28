/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require("prompt-sync")();

console.log("======================");
console.log("§§§-É UM TRIANGULO-§§§");
console.log("====================\n");

let lado1 = parseInt(prompt("Informe o valor do primerio lado: "));
let lado2 = parseInt(prompt("Informe o valor do segundo lado: "));
let lado3 = parseInt(prompt("Informe o valor do terceiro lado: "));

if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
    console.log("Os valores fornecidos formam um triangulo!");
    if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log(`O Triângulo é isósceles | os lados são ${lado1}-${lado2}-${lado3}`); 
    }else if(lado1 !== lado2 && lado2 !== lado3) {
        console.log(`O Triângulo é escaleno | os lados são ${lado1}-${lado2}-${lado3}`);
    }if(lado1 == lado2 && lado2 === lado3){
        console.log(`O Triângulo é equilátero | os lados são ${lado1}-${lado2}-${lado3}`);
    }
}else {
    console.log("Não é um triangulo");
}

