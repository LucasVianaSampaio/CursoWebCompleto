const pessoa = {
  nome: 'Lucas',
  idade: 20,
  endereco: {
    Rua: 'Áustria',
    numero: 247
  }
}

const {
  nome: name,
  idade,
  endereco: { Rua, numero }
} = pessoa

console.log(Rua, numero)
