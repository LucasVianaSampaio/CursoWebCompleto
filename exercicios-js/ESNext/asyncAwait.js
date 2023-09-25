//Objetivo de simplificar o uso de promisses...
async function buscaDadosNoGithub() {
    try {
        const response = await fetch('https://api.github.com/users/LucasVianaSampaio')
        const json = await response.json()

        console.log(json.login)
    } catch(err) {
        console.log('Ocorreu um erro:', err)
    } finally {
        console.log('Finalizado')
    }
}

buscaDadosNoGithub()