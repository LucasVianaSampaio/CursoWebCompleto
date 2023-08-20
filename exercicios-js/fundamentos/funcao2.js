//Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
  //função anonima caso eu queria armazenar em uma variável
  console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável

const soma = (a, b) => {
  //essa seta substitui a palavra function e o nome
  return a + b
}

console.log(soma(2, 3))

//retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

//Função com só um parametro

const multi = a => a * 2

console.log(multi(2))
