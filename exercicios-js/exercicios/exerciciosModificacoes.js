const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 19,
  tag: 'desconto'
})

const pessoa = {
  nome: 'Lucas',
  idade: 20
}

Object.freeze(pessoa)
pessoa.nome = 'Cássio'
console.log(pessoa)
