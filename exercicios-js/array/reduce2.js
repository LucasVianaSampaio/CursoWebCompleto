const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.reduce((acc, aluno) => {
  if (aluno.bolsista) acc++
  return acc
}, 0)

//TODOS OS ALUNOS SÃO BOLSISTAS?

resultado == alunos.length
  ? console.log('Todos os alunos são bolsistas')
  : console.log('Os alunos não são todos bolsistas')

//algum aluno é bolsista?

resultado != 0
  ? console.log(`Sim, existem ${resultado} bolsistas`)
  : console.log('Não existe nenhum aluno bolsista')
