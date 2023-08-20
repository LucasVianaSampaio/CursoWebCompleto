const limitaNumeroDeCasas = valor => {
  valor = valor.toFixed(2)
  valor = valor + ''
  return 'R$' + valor.replace('.', ',')
}

console.log(limitaNumeroDeCasas(0.30000000000000004))
