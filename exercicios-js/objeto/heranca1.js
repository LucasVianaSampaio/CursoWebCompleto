const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.__proto__) //se eu procurar um atributo e não achar em ferrari ele procura no prototipo(obj pai)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
