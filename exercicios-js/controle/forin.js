const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//O forin vai me dar o índice desses elementos
//para cada um dos elementos das notas ele vai me dar o índice i
//eu recebo o índice e não o valor em si da nota
for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
} //é interessante usar essa forma em objetos, para array nem tanto

//usar o let para o escopo ficar somente dentro do bloco
