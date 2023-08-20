const soma = function (x, y) {
  return x + y
}

const multi = (x, y) => {
  return x * y
}

const imprimirResultado = (a, b, operacao = soma) => {
  console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(2, 3, function (x, y) {
  return x - y
})
imprimirResultado(2, 3, multi)
