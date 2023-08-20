function area(largura, altura) {
  const area = altura * largura
  if (area > 20) {
    console.log(`Valor acima do permitido ${area}m2`)
  } else {
    return area
  }
} //não faz lá muito sentido essa função

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 1, 34, 2)) //ignora os outros parametros
console.log(area(2, 11))

//CUIDADO NA HORA DE UTILIZR RETORNOS DIFERENTES BASEADO NO TIPO DE PARAMETRO(VOU TENTAR USAR MAIS RETURN AO INVÉS DE CONSOLE.LOG)
