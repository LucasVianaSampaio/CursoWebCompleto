//não aceita repetição, estrutura de conjunto
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
console.log(times)
console.log(times.size)
console.log(times.has('Palmeiras'))

const nomes = ['Raquel', 'Lucas', 'Ana', 'Abigail']
const nomesSet = new Set(nomes)
console.log(nomesSet)