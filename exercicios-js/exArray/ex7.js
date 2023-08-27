//retorna se o número informado está dentro da faixa de valor informada como mínimo e máximo

const estaEntre = (numero, minimo, maximo) => {
  if (minimo <= numero && numero <= maximo) {
    return `O número ${numero} está entre ${minimo} e ${maximo}`
  } else {
    return `O número ${numero} não está entre ${minimo} e ${maximo}`
  }
}

console.log(estaEntre(12, 12, 20))
