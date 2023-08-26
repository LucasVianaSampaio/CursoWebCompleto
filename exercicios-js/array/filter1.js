const produtos = [
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

//FILTRAR OS PRODUTOS ACIMA DE 500 REAIS E FRÁGEIS

//1° MODO====================================
const produtosCaros = produtos.filter(e => {
  return e.preco > 500
})

const produtosFrageis = produtos.filter(e => {
  return e.fragil
})

//2° MODO=================================

const filtraProdutos = e => {
  return e.preco > 500 && e.fragil
}

const novosProdutos = produtos.filter(filtraProdutos)

console.log(novosProdutos)

//EXISTEM TBM OUTROS MODOS