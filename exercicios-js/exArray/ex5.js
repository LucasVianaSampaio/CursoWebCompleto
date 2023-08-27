//uma função que recebe dois números e retorna se o primeiro é maior ou igual ao segundo

const maiorOuIgual = (x, y) => {
  if (x > y) return `O número ${x} é maior do que o ${y}`
  else if (x === y) return `O número ${x} é igual ao ${y}`
  else return 'O número não é maior nem menor, provavelmente é menor'
}

console.log(maiorOuIgual(3, '2'))
