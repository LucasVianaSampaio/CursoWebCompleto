//TUDO ISSO PARA VARIÁVEIS QUE APONTAM PARA UM ENDEREÇO DE MEMÓRIA

let valor //não inicializada

console.log(valor)

valor = null //não está apontando para nenhum endereço e não tem nenhum valor. Ausência de valor

//não atribuir undefined manualmente

console.log(valor)

//console.log(valor.toString()) //cuidado ao acessar algo de uma var que potencialmente pode ser nula

const produto = {}

console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.5

console.log(produto)

produto.preco = undefined //evitar

console.log(!!produto.preco)

console.log(produto)

produto.preco = null //esse produto está sem preço
console.log(!!produto.preco)
console.log(produto)
