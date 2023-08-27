//receber dois números positivos e realizar a multiplicação entre eles sem utilizar o operador de multiplicação

const multiplica = (x, y) => {
  let contador = 1
  while (contador < y) {
    x += x
    contador++
  }
  return x
}

console.log(multiplica(12, 2))
