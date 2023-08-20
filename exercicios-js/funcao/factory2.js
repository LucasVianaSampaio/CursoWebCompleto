function CriarProduto(
  nome = 'nome não informado',
  preco = 'preço não informado'
) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(CriarProduto('Sabão', 189))
console.log(CriarProduto('iPad', 199.49))

