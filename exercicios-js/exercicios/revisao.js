const somaNumeroObj = ({ num1, num2 }) => {
  return num1 + num2
}

const somaNumeroArray = ([num1, num2]) => num1 + num2

const obj = {
  num1: 2,
  num2: 3
}

const array = [12, 3]

const [a, b] = [12, 3]

const { num1: c, num2: d } = obj

console.log('A soma é:', somaNumeroObj(obj))
console.log('A soma é:', somaNumeroArray(array))
console.log(`As variáveis são ${a} e ${b}`)
console.log(`Variáveis de objeto são ${c} e ${d}`)
