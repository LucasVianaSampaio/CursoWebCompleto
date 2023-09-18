//possibilidade de percorrer os elementos em si e não mais só os índice

for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisses']
for(let i in assuntosEcma) { //percorro em cima de índice
    console.log(i) //console.log(assuntosEcma[i])
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}


const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisses', {abordado: false}]
])

for(let assunto of assuntosMap) {
    console.log(assunto)
}

for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}

for(let[ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}