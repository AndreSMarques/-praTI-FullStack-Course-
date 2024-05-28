/*
Você tem uma lista de objetos que representam diferentes tipos de veiculos e 
suas carcteristicas.
Seu objetivo é primeiro usar o FOR IN para listar todads as propiedades e
 valores de cada veiculo.
Depois, utilizar o FOR OF para listar apenas os modelos dos veiculos.
*/

let veiculos = [{
        tipo: "SUV",
        marca: "Renault",
        modelo: "Kardian"
    },
    {
        tipo: "SEDAN",
        marca: "Chevrolet",
        modelo: "Cruze"
    }
]

for (let veiculo in veiculos){
    for (let i in veiculos[veiculo]){
        console.log(`${i} : ${veiculos[veiculo][i]}`);
    }
}


for (const veiculo of veiculos) {
    console.log(veiculo.marca)
}