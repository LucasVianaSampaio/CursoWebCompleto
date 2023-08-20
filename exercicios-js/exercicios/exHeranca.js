const carro = {
  velMax: 200,
  velAtual: 0,

  aceleracao(delta) {
    if (this.aceleracao + this.velAtual <= this.velMax) {
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
  velMax: 100,

  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
ferrari.aceleracao(10)
console.log(ferrari.status())
