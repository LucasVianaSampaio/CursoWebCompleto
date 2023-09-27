//Objetivo de simplificar o uso de promisses...
async function buscaDadosNoGithub() {
    try {
        const response = await fetch('h123')
        const json = await response.json()

        console.log(json.login)
    } catch(err) {
        throw `Ocorreu um erro: ${err}`
        //console.log('Ocorreu um erro:', err)
    } finally {
        console.log('Finalizado')
    }
}

buscaDadosNoGithub().catch(console.log)