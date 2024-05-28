/*
    Declaração de função

    JS tem uma flexiblidade de parâmetros, mesmo que a função tenha parâmetros, em JS não precisa ser passado todos os parâmetros, podendo ser 
    passados mais, menos ou nenhum parâmetro e isso não gerará erro.
    Caso seja passado mais parâmetros, JS desconsidera os parâmetros adicionais. 
    Em caso de menos parâmetros, oq está ausente receberá o valor 'undefined', ou seja, os parâmetros não indicados, receberão undefinied.

    JS possuí 3 escopos: global (pode ser acessado no script como um todo), da função (escopo apenas dentro da função) e o escopo de bloco (instruções contidas dentro de comandos, como  if e switch), caso seja escrito "var" antes da variável de escopo de bloco, ela se torna global (caso o escopo de bloco seja declarado dentro do escopo da função, essa elevação do escopo acontece, mas apenas para o nível da função e não global). Caso 'var' seja declarado dentro do escopo de uma função, o escopo não se torna global.
*/

function calcularAreaTerreno(largura, comprimento) {

    let area = largura * comprimento

    return area

}

let largura = prompt('Digite a largura do terreno em metros')
let comprimento = prompt('Digite a comprimento do terreno em metros')

//Chamada da função e passagem de parâmetros
let resultado = calcularAreaTerreno(largura, comprimento)
console.log('O terreno possuí ' + resultado + ' metros quadrados')

/*
    Funções anônimas tem a sintaxe identica a uma função comum, a diferença está no fato de que elas não possuem nome, recursos muito utilizados principalmente dentro de callbacks (funções dentro de funções). Declaração:
*/

/* 
    function(){
        console.log('Olá, mundo!')
    }
*/

/*
    Técnica de wrapper, o JS permite associar a uma variável não apenas tipos, mas também funções. 
    A variável passa a guardar uma referência para a função de modo a embrulhar a mesma.
*/

let exibirFuncao = function () {
    console.log('Olá, mundo!')
}

exibirFuncao()

/*
   Funções de callback geralmente são anônimas e servem de parâmetros para outras funções: 
*/

function exibirFuncao(callbackSucesso, callbackErro) {

    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas...')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

let callbackSucesso = function (titulo) {
    console.log(titulo)
}

let callbackErro = function (erro) {
    console.log(erro)
}

exibirFuncao(callbackSucesso, callbackErro)