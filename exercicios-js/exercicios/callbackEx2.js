const notas = [1.2, 5.5, 7, 8.8, 9, 10]

const notasBaixas = notas.filter(nota => nota < 7)

const todasAsNotas = notas.forEach(nota => nota * 2)

console.log(notasBaixas)
console.log(todasAsNotas)
