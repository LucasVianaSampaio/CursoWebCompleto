const pessoa = {
  nome: 'Rebeca',
  idade: 20
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'DataDeNasc', {
  enumerable: true,
  writable: false,
  value: '01/12/2016'
})

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 }

const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234

console.log(obj)
