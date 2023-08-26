const nomes = ['Vandir', 'Beto', 'Cláudio', 'Abnair']

nomes.sort()

nomes.forEach((num, indice) => {
  console.log(`${indice + 1}: ${num}`)
})

const numeros = [1, 2, 3, 4, 5]

const numeros2 = numeros.map(num => {
  return num * 2
})

console.log(numeros2)
