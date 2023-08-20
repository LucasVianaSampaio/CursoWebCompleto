let aprovados = new Array('Bia', 'Carlos', 'Ana') //forma não tão recomendada
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' //assim é mais comum pra substituir um elemento
aprovados.push('Abia') //mais apropriado para adicionar um novo elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael' //os valores entre as posições definidas anteriores e essa nova posição existirão, mas serão undefined
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort() //vai ordenar o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //serve pra remover ou adicionar ou os dois no mesmo array
console.log(aprovados)
