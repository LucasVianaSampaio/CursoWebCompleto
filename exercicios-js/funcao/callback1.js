const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
} //função callback. Que será chamada de volta para cada elemento

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//calback: passar uma função e ela será chamada quando um evento ocorrer
