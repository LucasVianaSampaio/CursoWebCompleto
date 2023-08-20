const soma = function (a, b) {
  return a + b
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
  return x - y
})
imprimirResultado(3, 4, (x, y) => {
  return x * y
}) //não tem como dar nome para uma função arrow

const pessoa = {
  nome: 'Lucas',
  falar: function () {
    console.log(`Opa ${this.nome}`)
  }
}

pessoa.falar()
