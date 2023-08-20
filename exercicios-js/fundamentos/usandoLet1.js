//MESMO NOME, MAS COM ESCOPOS DIFERENTES ENTÃO ELAS PODEM COEXISTIR
// VAR TEM ESCOPO GLOBAL

var numero = 1
{
  let numero = 2
  console.log('dentro = ', numero)
}
console.log('fora = ', numero)
