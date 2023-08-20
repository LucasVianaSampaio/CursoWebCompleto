//cadeia de protipo

const avo = { atri1: 'A' }
const pai = { __proto__: avo, atri2: 'B' }
const filho = { __proto__: pai, atri3: 'C' }
console.log(filho.atri1)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 //sombreamento
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}` //o super eu usei pra ele chamar o método do meu protótipo
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
