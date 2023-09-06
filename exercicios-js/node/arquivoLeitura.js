const fs = require('fs')

const caminho = __dirname + "/arquivo.json"


//sincrono...(tipo de estratégia não tão interessante)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//terceiro metodo(modo síncrono)======================
const config = require('./arquivo.json')
console.log(config.db)

//leitura de uma pasta==============================
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

//dirname é o diretório atual