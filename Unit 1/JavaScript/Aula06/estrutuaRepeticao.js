/*
    Estruturas de controle: repetição, são estruturas que nos permitem executar mais de uma vez um mesmo trecho de código. 
    Trata-se de uma forma de executar blocos de comandos somente sob determinadas condições, mas com a opção de 
    repetir o mesmo bloco quantas vezes for necessário.
*/

/*
for(variavel; condição; incremento)
*/

//Exemplo 1: Tabuada

// let multiplicando = 5;

// for(let i = 0; i <= 10; i++){
//     console.log(`${multiplicando} * ${i} =`, multiplicando * i);
// }

//Exemplo 2: Imprimir os números pares de 1 a 20;

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


//While 

let controle = 0

while (controle <= 10) {
    console.log(controle)
    controle++
}

//Imprimir os números de 10 a 1 em ordem decrescente.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

//Imprimir os múltiplos de 5 menores que 100.
let num = 5;
while (num < 100) {
    console.log(num);
    num += 5;
}

//Solicitar números ao usuário até que ele insira um valor negativo.
let valor;
do {
    valor = parseInt(prompt("Digite um valor:"));
} while (valor >= 0);


//do-While

//Solicitar uma senha ao usuário.

let senha;
do {
    senha = prompt("Digite a senha:");
} while (senha !== "senha_correta");
console.log("Senha correta! Acesso permitido.");


//Pedir ao usuário para adivinhar um número entre 1 e 10.
const numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    if (tentativa < numeroCorreto) {
        console.log("Tente um número maior.");
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor.");
    }
} while (tentativa !== numeroCorreto);
console.log("Parabéns! Você acertou o número.");