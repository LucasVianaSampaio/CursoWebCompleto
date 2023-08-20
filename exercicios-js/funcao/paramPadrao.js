//estratégia 1 para gerar valor padrão==================
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c //aqui ele será diferente de null e undefined
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //0 nessa estratégia será considerado como FALSO

//estratégia 2, 3 e 4 para gerar o valor padrão===============
function soma2(a, b, c) {
  a = a !== undefined ? a : 1 //como é estritamente diferente possivelmente não funciona para NULL
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c //essa é a mais segura
  return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//TODAS ESSAS ESTRATÉGIAS SÃO UM POUCO TRABALHOSAS E DE VERSÃO ANTIGA

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) //MUUUUUUUUUUUUUUUUUUUUUUITO MELHOR================
