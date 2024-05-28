/*

*/

const pessoa = {
    nome: "Lucas",
    idade: 23,
    profissao: "Dev",
    email: "lateste@gmail.com",
    empregada: true
}

// console.log(pessoa.nome); acessando os valres especificos

// pessoa.nome = "Jurema"; alterando valor

// console.log(pessoa.nome);
// console.log(pessoa.email);
// console.log(pessoa.empregada);
// delete pessoa.empregada; apagando

// console.log(pessoa);

// pessoa.falar = function() { --- usando função 
//     return `Meu nome ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
// }

// console.log(pessoa)

// const computador = {  -- Exercicio proposto
//     cor: "preto",
//     memoria: 500,
//     ram: 16,
//     placaVideo: 4060
// }

// computador.ligar = function(){
//     return "Ligando..."
// }

// console.log(computador)


// Interanto com for in -  
// for (let chave in pessoa){
//     console.log(chave + ": " + pessoa[chave])
// }

//forof - só funciona melhor com arrays
// let numeros = [10, 20, 100]
// for (let iterator of numeros) {
//     console.log(iterator)
// }

// for in -- pegar o indice primerio 
// let numeros = [10, 56, 9]
// for(let numero in numeros){
//     console.log(numero + ':' + numeros[numero])
// } 

//ForEach

let cores = ['Azul', 'Preto', 'Branco']

cores.forEach((cor, indice ) => {
    console.log(indice + ":" + cor)
})  