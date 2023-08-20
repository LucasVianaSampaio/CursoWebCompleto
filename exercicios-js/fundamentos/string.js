const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //ele não inclui o índice 3

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))

//charAt busca pela posição o caractere correspondente
// retorna a posição do caractere dado
//substring retorna a string toda a partir da posição dada
//sibstring(, ) retorna a string entre as duas posições sem contar o último
//.concart concatena
//.split transforma em string separadando por meio do que é dado, por exemplo, uma vírgula
