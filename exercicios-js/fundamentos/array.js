const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // quantidade de elementos desse array

valores.push({ id: 3 }, false, null, 'teste') //adicionar novos elementos no array
console.log(valores)
//preze por array com tipos de dados homogênios

console.log(valores.pop()) //retira o ultimo valor do array

delete valores[0]
console.log(valores)

console.log(typeof valores)

//valores.length
//valores.pop()
//valores.push()
