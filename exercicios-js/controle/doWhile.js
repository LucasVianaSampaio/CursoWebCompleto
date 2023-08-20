function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1
//let opcao

do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1) //ele só faz o teste após executar a primeira repetição
//Não é tão usando quanto o while normal
console.log('Até a próxima')
