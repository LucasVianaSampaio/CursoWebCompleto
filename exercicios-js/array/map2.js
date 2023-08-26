const carrinho = [
  '{"Nome": "Borracha", "preco": 3.45}',
  '{"Nome": "Caderno", "preco": 13.90}',
  '{"Nome": "Kit de lápis", "preco": 41.22}',
  '{"Nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)
