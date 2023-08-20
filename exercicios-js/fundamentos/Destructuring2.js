const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //feito em uma única linha
console.log(n1, n3, n5, n6)

const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8]
]

console.log(nota) //desestruturação de arrays não é lá muito recomendável. É mais fácil até acessar pelo índice
