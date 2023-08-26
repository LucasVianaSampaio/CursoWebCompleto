const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos
  .map(a => a.nota)
  .reduce((acc, atual) => {
    console.log(acc, atual)
    return acc + atual
  }, 10) //posso passar um valor inicial pro acc

console.log(resultado)
