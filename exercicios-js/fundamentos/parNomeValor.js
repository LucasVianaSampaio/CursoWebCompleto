//par nome/valor
//EM CONTEXTOS DIFERENTES------------

const saudacao = 'Opa' //contexto léxico

function exec() {
  const saudacao = 'Faala' //contexto léxico 2
  return saudacao
}

//OBJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
  nome: 'Lucas',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec()) //contexto lexico diferente
console.log(cliente)
