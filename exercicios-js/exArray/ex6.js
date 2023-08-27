//retorna o inverso do boolenano ou do número informado e informa se o que foi informado na função não é nem booleano nem númerico

const inverso = valor => {
  if (typeof valor === 'boolean') {
    return !valor
  } else if (typeof valor === 'number') {
    return -valor
  } else {
    return `Booleano ou número esperado, mas o parâmetro é do tipo ${typeof valor}`
  }
}

console.log(inverso(1231))
