//novo recurso do

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

//const nome = pessoa.nome //foma paia

const { nome, idade } = pessoa

console.log(nome, idade)

const { nome: name, idade: age } = pessoa

console.log(name, age)

const { sobrenome, bemHumorado = true } = pessoa //defini um valor padrão pra não vir undefined

console.log(sobrenome, bemHumorado)

const {
  endereco: { logradouro, numero, cep }
} = pessoa

console.log(logradouro, numero, cep)
