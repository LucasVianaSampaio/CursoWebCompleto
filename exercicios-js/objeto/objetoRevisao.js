//coleção dinâmica de pares chave/valor
const produto = new Object()
produto.nome = 'cadeira'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,

  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua Abc',
      numero: 123
    }
  },
  //array de objeto
  condutores: [
    {
      nome: 'Junior',
      idade: 19
    },
    {
      nome: 'Ana',
      idade: 42
    }
  ],

  calcularValorDoSeguro: function () {
    //...
  }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
