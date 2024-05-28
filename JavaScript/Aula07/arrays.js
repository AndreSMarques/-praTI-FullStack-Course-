/*
    Array em JS é um objeto que possui seus métodos e atributos próprios, sendo necessária o instanciamento do mesmo parar criar uma variável desse 
    tipo. O índice pode ser mesclado, também.
*/

/*
    let lista_frutas = [] --- Também funciona como declaração. Pode ser indicado o valor para cada indíce direto no construtor do array ou nos colchetes.

    let lista_frutas = Array ('Banana', 'Maça', 'Morango', 'Uva') --- Também funciona como declaração, tend comoo os índices sequenciais
    let lista_frutas = ['Banana', 'Maça', 'Morango', 'Uva'] --- Idem
*/


let lista_frutas = Array()

lista_frutas[1] = 100
lista_frutas[2] = true
lista_frutas['x'] = 'Morango'
lista_frutas[4] = 'Uva'


console.log(lista_frutas)

/*
    Arrays multidimensionais são arrays compostos por outros arrays, dentro de indices de um array podem ser encadeados outros arrays.
*/

let lista_coisas = Array()

lista_coisas['frutas'] = Array()

lista_coisas['frutas'][0] = 'Maça'
lista_coisas['frutas'][1] = 'Uva'
lista_coisas['frutas'][2] = 'Laranja'
lista_coisas['frutas'][3] = 'Tangerina'

lista_coisas['pessoas'] = Array('Pessoa 1', 'Pessoa 2', 'Pessoa 3')

console.log(lista_coisas)

/*
    inclusão de elementos no final do array com método nativo, passando como parâmetro o elemento para ser incluso no final
        
    letlista_frutas = Array()

    lista_frutas[0] = 'Banana'
    lista_frutas[1] = 'Maça'

    //inlusão de elemento no final do array
    lista_frutas.push('Uva')

    //inclusão de elemento no início do array
    lista_frutas.unshift('Laranja')

    //exclusão de elemento no final do array
    lista_frutas.pop()

    //exclusão no início do array
    lista_frutas.shift()

    console.log(lista_frutas)

*/

//arrays multidimensionais: sintaxe de inserção e exclusão

let lista_coisas = Array()

lista_coisas['frutas'] = Array()
lista_coisas['pessoas'] = []

lista_coisas['frutas'].push('Maça')

console.log(lista_coisas)

/*
    para pesquisas dentro de array é utilizado o método indexOf passando commo parâmetro o elemento alvo da pesquisa. Caso o retorno seja (-1) significa que o elemento não existe. Caso exista o método retorna o índice do elemento.
*/

let lista_frutas = Array('Banana', 'Maça', 'Morango', 'Uva')

let auxiliar = lista_frutas.indexOf('Morango')

if (auxiliar === -1) {
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe e está na posição ' + auxiliar)
}

/*
ordenação alfabética: usa-se o método sort, que faz a ordenação alfabética e rearanja os índices


let lista_frutas =  Array()

lista_frutas[0] = 'Maça'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

console.log(lista_frutas.sort())

*/

let lista_frutas = Array()

lista_frutas[0] = 12
lista_frutas[1] = 40
lista_frutas[2] = 3
lista_frutas[3] = 7
lista_frutas[4] = 19
lista_frutas[5] = 1