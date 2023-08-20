//NA FUNÇÃO ARROW O THIS NÃO MUDA

const person = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao) //acessando saudação do objeto no qual é o dono dessa função
  }
}

person.falar()
const falar = person.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = person.falar.bind(person) //objeto no qual vc quer que seja resolvido o this, o this sempre será o objeto que foi passado para a função bind
falarDePessoa()
