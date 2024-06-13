/*
  SWITCH CASE - O comando switch é um comando de seleção que permite selecionar um comando entre vários outros comandos. 
  Isto é feito através da comparação de uma variável a um conjunto de constantes. Cada um dos comandos está ligado a uma constante.
*/

// switch (opcao) {
//     case 1:
        // indica para o switch que o case chegou ao final, caso n for escrita, todo o conteudo do case 1 e dos proximos seriam executados, até um break ser encontrado.
//         break 
        
    //Funciona como um else, e pode n ser definido, caso seja definido e nenhum case entre em loop, ele será ativado.
//     default: 
//         break;
// }
const prompt = require("prompt-sync")();


//Exemplo 1: Verificar o dia da semana
// let dia = parseInt(prompt("Insira um numero de 1 a 7: "));
// let nomeDia;

// switch (dia) {
//   case 1:
//     nomeDia = "Domingo";
//   break
//   case 2:
//     nomeDia = "Segunda-feira";
//   break
//   case 3:
//     nomeDia = "Terça-feira";
//   break
//   case 4:
//     nomeDia = "Quarta-feira";
//   break
//   case 5:
//     nomeDia = "Quinta-feira";
//   break
//   case 6:
//     nomeDia = "Sexta-feira";
//   break
//   case 7:
//     nomeDia = "Sabado";
//   break
// }

// console.log("O dia da semana é " + nomeDia);

//Exemplo 2: Calcular o número de dias em um mês

// let mes = parseInt(prompt("Insira o número do mês (1 a 12)"));
// let diasNoMes;

// switch (mes) {
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//       diasNoMes = 31;
//       break;
//   case 4: case 6: case 9: case 11:
//       diasNoMes = 30;
//       break;
//   case 2:
//       diasNoMes = 28; // Assumindo que não é um ano bissexto
//       break;
//   default:
//       diasNoMes = -1; // Mês inválido
// }

// if (diasNoMes !== -1) {
//   console.log("O mês", mes, "tem", diasNoMes, "dias.");
// } else {
//   console.log("Mês inválido.");
// }