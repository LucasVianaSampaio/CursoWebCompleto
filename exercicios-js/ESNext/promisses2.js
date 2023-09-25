/**const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    }) 
}

somaDoisNumeros(2, 3)
    .then(numeros => `A soma foi ${numeros}`)
    .then(resultado => console.log(resultado))
    .catch(e => console.log(`Ocorreu um erro: ${e}`))*/

fetch('https://api.github.com/users/LucasVianaSampaio') //promisse
    .then(response => {
       return response.json()
    })
    .then(body => console.log(body))
    .catch(err => console.log(`Ocorreu um erro: ${err}`))
    .finally(() => {
        console.log('deu')
    })
