function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 4589, desc: 0.2 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//A DIFERENÇA ENTRE CALL E APPLY É SÓ A PASSAGEM DOS PARÂMETROS

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
