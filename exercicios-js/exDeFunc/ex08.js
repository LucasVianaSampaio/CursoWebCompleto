const pontuacaoPedro = pontos => {
  let menorpont = pontos[0]
  let maiorpont = pontos[0]
  let quebraRecorde = 1
  let jogoPior = 1

  for (let i in pontos) {
    if (pontos[i] < menorpont) {
      menorpont = pontos[i]
      jogoPior++
    }

    if (pontos[i] > maiorpont) {
      maiorpont = pontos[i]
      quebraRecorde++
    }
  }
  return [quebraRecorde, jogoPior]
}

const pontuacao = [11, 22, 3, 4]

console.log(pontuacaoPedro(pontuacao))
