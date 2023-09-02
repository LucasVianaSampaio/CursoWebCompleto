const moduloA = require('../../moduloA') //no ../ eu saio da pasta B e estou na pasta A
console.log(moduloA.ola)

const c = require('./pastaC') //como é um arquivo index eu não preciso referenciar por inteiro

const http = require('http') //to acessando um módulo interno do node
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)

console.log(c.ola)


