const pai = { nome: 'Rogério', idade: 40 }

const filha = {}

Object.setPrototypeOf(filha, pai)

console.log(filha.idade)