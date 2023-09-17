//Object.values e Object.entries

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome = 'lucas'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

