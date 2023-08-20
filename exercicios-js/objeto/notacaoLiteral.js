const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c } //tentar o destructuring

console.log(obj1, obj2)

//forma de fazer função
const obj5 = {
  nome: 'Lucas',
  funcao() {
    return `Bom dia ${this.nome}`
  }
}

console.log(obj5.funcao())
