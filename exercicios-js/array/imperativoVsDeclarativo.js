const alunos = [
  { nome: 'João', nota: 7.8 },
  { nome: 'Maria', nota: 9.2 }
]

//imperativa
let total = 0
for (let i = 0; i < alunos.length; i++) {
  total += alunos[i].nota
}

console.log(total / alunos.length)

//declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) //reduce tem essa ideia de agregar os valores
console.log(total2 / alunos.length)

//LEVAR SEMPRE EM CONSIDERAÇÃO A IMPORTÂNCIA DO REUSO
