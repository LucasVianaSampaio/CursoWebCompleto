const aprovados = ['Júlia', 'Amanda', 'Clarisse', 'Darwin']

//foreach=====================================

aprovados.forEach(e => {
  console.log(e)
})

//map=======================================

const numeros = [1, 2, 3, 4, 5]

const numeros2 = numeros.map(e => {
  return e * 2
})

console.log(numeros2)

//reduce=====================================

const numeros3 = numeros.reduce((acc, num) => {
  console.log(acc, num)
  return acc + num
}, 10)

console.log(numeros3)

//filter=======================================

const numeros4 = numeros.filter(e => {
  return !(e % 2)
})

console.log(`numeros4: ${numeros4}`)
