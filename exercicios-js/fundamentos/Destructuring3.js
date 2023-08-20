function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 })) //aqui eu estou usando um objeto
const obj = {
  max: 50,
  min: 40
}
console.log('rand do obj:', rand(obj))

console.log(rand({ min: 955 }))
console.log(rand({}))
