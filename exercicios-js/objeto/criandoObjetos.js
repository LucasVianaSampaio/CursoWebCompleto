//usando a notação literal==========================
const obj1 = {}
console.log(obj1)

//Object em JS======================================
const obj2 = new Object()
console.log(obj2)

//Funções construtoras===================================
function Produto(nome, preco, desc) {
  this.nome = nome //variável agora está visível para fora do objeto
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 799, 0.15)
const p2 = new Produto('Notebbok', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory==================================
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalario() {
      return (salario / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//Object.create(falar mais nas aulas futuras)============
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um objeto...===============
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
