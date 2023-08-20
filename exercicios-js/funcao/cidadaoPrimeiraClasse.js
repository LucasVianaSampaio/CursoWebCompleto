//Função em JS é First-class Object(Citizens)
//Higher Order Function

//criar de forma literal====================
function fun1() {}

//Armazenar uma função(anonima sempre) em uma variável============
const fun2 = function () {}

//Armazenar uma função dentro de um array================
const array = [
  function (a, b) {
    return a + b
  },
  fun1,
  fun2
] // é melhor criar uma função anonima, armazenar em uma variável e depois armazenar essa variável em um array
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto============
const obj = {}
obj.falar = function () {
  return 'Opa'
}
console.log(obj.falar())

//Passar uma função como parâmetro para outra função
function run(fun) {
  fun()
} //não é lá um bom exemplo

run(function () {
  console.log('Executando...')
})

//Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(4)
