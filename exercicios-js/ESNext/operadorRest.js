//operador ...rest(juntar/)/spread(espalhar)
//usar rest com parametro de função

//usar spread com obj

const funcionario = {nome: 'Maria', salario: 1249.99}
const clone = {ativo: true, ...funcionario} //pegando todos os atributos de funcionario e espalhando no obj clone
console.log(clone)

//usar spread em array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)

//Uso com destructuring
const pessoa = {nome: 'Lucas', idade: 20, diaSem: 'Domingo'}

const {nome, ...rest} = pessoa //destructuring com rest

console.log(nome, rest)