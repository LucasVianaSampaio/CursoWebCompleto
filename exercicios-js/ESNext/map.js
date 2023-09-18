//maior flexibilidade em relação ao objeto

const tecnologies = new Map()
tecnologies.set('react', {framework: false})
tecnologies.set('angular', {framework: true})

console.log(tecnologies.get('react'))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)