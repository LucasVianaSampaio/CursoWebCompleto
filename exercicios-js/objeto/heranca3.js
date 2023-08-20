const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filho1 = Object.create(pai)
filho1.nome = 'Ana'

console.log(filho1.corCabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
