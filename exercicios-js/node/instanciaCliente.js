const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incr()
contadorA.incr()
console.log(contadorB.valor)

contadorC.incr()
contadorC.incr()
console.log(contadorC.valor, contadorD.valor)