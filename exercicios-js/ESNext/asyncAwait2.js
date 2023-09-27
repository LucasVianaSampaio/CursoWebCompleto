function retornaValor(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, tempo * 2000);
    })
}

const esperarPor = (tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando promisse...')
            resolve()
        }, tempo * 1000);
    })
}
    

async function executar() {
    let valor = await retornaValor(1) //com await o valor 10 é retornado, sem await o 'Promise { <pending> }' é retornado
    console.log(valor)
}

executar()