const carros = ['toyota', 'sedan', 'fiat']

//sem callback

for (let i in carros) {
  console.log(`${i}: ${carros[i]}`)
}

for (let i = 0; i < carros.length; i++) {
  console.log(`${i}: ${carros[i]}`)
}

//com callback

function imprimir(carros, indice) {
  console.log(`${indice}: ${carros}`)
}

carros.forEach(imprimir)
carros.forEach((carro, indice) =>
  console.log(`ultimo exemplo=>${indice}: ${carro}`)
)
