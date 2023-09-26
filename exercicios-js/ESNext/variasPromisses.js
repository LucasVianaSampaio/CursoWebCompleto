const somaNumeros = (a, b, tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
            console.log('números somados')
        }, tempo * 1000);
    })
}

function somarVariosNumeros() {
    return Promise.all([
        somaNumeros(2, 2, 1),
        somaNumeros(2, 3, 2),
        somaNumeros(2, 6, 3),
    ])
}

somarVariosNumeros()
.then(numeros => console.log(numeros))
.finally(() => {console.log('programa encerrado')})