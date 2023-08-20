const nomes = ['Amanda', 'Lucas', 'Pedro']

nomes.splice(1, 1, 'Anastácia', 'tirulipa')
console.log(nomes)

const novosNomes = nomes.slice(1, 3)
console.log(novosNomes)
