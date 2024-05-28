//Funções Avançadas: STRING

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos;
*/

// Length é um atributo retorna a quantidade de caracteres de uma string
console.log('Jaques Hyago'.length)

// É um método que retorna o número do indice que um caractere ocupa 
console.log('Jaques Hyago'.charAt(7))

//É um método que retorna a posição do caractere na sua primeira ocorrência na string, sendo case sensitive
let nome = 'Jaques Hyago'
console.log(nome.indexOf('H'))

// É um método que permite substituir textos dentro de uma string, se o método encontrar a primeira cadeia de caracteres, ele substituirá pelo outro parâmetro 
console.log(nome.replace('Jaques Hyago', 'Hyago Jaques'))

// É um método que permite extrair parte de uma string, com base numa posição inicial, e o segundo parâmetro indica quantos caracaters devem ser exibidos na sequencia
console.log(nome.substr('7', '5'))

// Métodos como toLocaleLowerCase, toLocaleUpperCase, toLowerCase e toUpperCase são auto explicativos
console.log(nome.toLocaleUpperCase())

// Método que remove as extremidades em branco de uma string 
console.log('-' + nome.trim() + '-')

//Funções Avançadas: MATEMÁTICAS

//Faz arredondamentos para cima
let x = Math.ceil(10.380)
console.log(x)

//Arredondamento para baixo
let y = Math.floor(10.380)
console.log(y)

//arredondamento com base em média, exemplo em passar de 0.5, valor até 4: arredonda pra baixo, maior ou igual a 5 arrendonda pra cima
let z = Math.round(10.380)
console.log(z)

//Fornece um mundo aleatório entre 0 e 1
let v = Math.random()
console.log(v)

//Funções Avançadas: DATAS

//Date precisa ser instanciado, e todas as datas são baseadas com base no SO, possuindo getters e setters normalmente.
let data = new Date()

//Recupera a data do dia atual
console.log(data.getDate())

//Como é de 0 a 11, soma-se 1 para os 12 da vida reala
console.log(data.getMonth() + 1)

console.log(data.getFullYear())

//adicionar / remover dias
console.log(data.toString())
data.setDate(data.getDate() + 720)
console.log(data.toString())

//adicionar / remover meses
console.log(data.toString())
data.setMonth(data.getMonth() + 1)

console.log(data.toString())

//adicionar / remover anos
console.log(data.toString())
data.setFullYear(data.getFullYear() + 1)

console.log(data.toString())

//15/01/2017
let data1 = new Date(2017, 0, 15)

//23/02/2017
let data2 = new Date(2017, 1, 23)

console.log(data1.toString())

console.log(data2.toString())

//converter datas para algo que possamos calcular
console.log(data1.getTime())

console.log(data2.getTime())

//1 de janeiro de 1970


//encontar a qtde de milissegundos entre data1 e data2
let milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
console.log(milissegundos_entre_datas)

//1 dia tem 24, cada hora tem 60 minutos, 
//cada minuto tem 60 segundos e 
//cada segundo tem 1000 milissegundos
//então quantos milissegundos existem em um dia?
let milissegundos_por_dia = (1 * 24 * 60 * 60 * 1000)
console.log(' 1 dia tem: ' + milissegundos_por_dia + ' milissegundos')


console.log('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dia(s)')