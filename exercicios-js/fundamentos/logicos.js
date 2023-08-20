function compras(trab1, trab2) {
  const comprarSorvete = trab1 || trab2
  const comprarTv50 = trab1 && trab2
  //const comprarTv32 = !!(trab1 ^ trab2) //operadore bit a bit
  const comprarTv32 = trab1 != trab2 //ou exclusivo(É MAIS INTERESSANTE ESSE MODO DE ESCREVER)
  const manterSaudavel = !comprarSorvete //negação lógica

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //eu retornei em objeto para retornar vários de uma vez
  //só passei o valor que automaticamente já é criado um objeto que o nome da const vai ser a chave do objeto e o valor será o resultado das operações
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
