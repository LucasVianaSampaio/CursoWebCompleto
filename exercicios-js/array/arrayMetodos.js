const pilotos = ['Vettel', 'Alonso', 'Raikkanen', 'Massa']
pilotos.pop() //remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //insere um último elemento
console.log(pilotos)

pilotos.shift() //remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //insere um primeiro elemento
console.log(pilotos)

//splice serve para adicionar e remover elementos dentro de um array
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa saiu
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //retorna novo array a partir do índice informado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) //o índice um entra no novo array, mas o 4 não
console.log(algunsPilotos2)
