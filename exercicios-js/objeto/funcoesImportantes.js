const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 3
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
}) //definir uma propriedade de um modo mais completo para maior flexibilidade

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//OBJECT.assign
const dest = { a: 1 } //objeto que vai receber os atributos
const o1 = { b: 2 } //atributo que será concatenado no objeto
const o2 = { c: 3, a: 4 } //atributo que será concatenado no objeto
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj) //congela um objeto e impede(impede que novas propriedades sejam adicionadas a ele e que as existentes sejam removidas)
obj.c = 1234
console.log(obj)
