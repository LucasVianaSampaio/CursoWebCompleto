//Object.preventExensions(pode excluir e alterar valores, mas não adicionar novos atributos)

const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' //pode alterar
produto.descricao = 'Borracha escolar branca' //não vai surtir efeito algum
delete produto.tag
console.log(produto)

//Object.seal(não consegue adicionar nem excluir atributos do objeto, mas pode modificar os valores)
const pessoa = {
  nome: 'juliana',
  idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //não vai dar certo
delete pessoa.nome //não vai dar certo
pessoa.idade = 29

console.log(pessoa)

//Object.freeze(não consegue incluir, excluir e nem modificar)
