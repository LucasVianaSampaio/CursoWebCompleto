function pessoa() {
  this.idade = 0
  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new pessoa()

//ARROW NÃO DEIXA O THIS VARIAR
