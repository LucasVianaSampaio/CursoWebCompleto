const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in notas) {
  console.log(`Índice: ${i}: ${notas[i]}`)
}

const pessoa = {
  nome: 'Lucas',
  idade: 32,
  rua: 'Áustria',
  numero: 247
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
