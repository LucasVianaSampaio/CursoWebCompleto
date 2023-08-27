//recebe um número de 1 à 12 e retorna o mês do ano correspondente aquele número

const nomeDoMes = num => {
  switch (num) {
    case 1:
      return 'Janeiro'
      break
    case 2:
      return 'Fevereiro'
      break
    case 3:
      return 'Março'
      break
    case 4:
      return 'Abril'
      break
    case 5:
      return 'Maio'
      break
    case 6:
      return 'Junho'
      break
    case 7:
      return 'Julho'
      break
    case 8:
      return 'Agosto'
      break
    case 9:
      return 'Setembro'
      break
    case 10:
      return 'Outubro'
      break
    case 11:
      return 'Novembro'
      break
    case 12:
      return 'Dezembro'
      break
    default:
      return 'Mês não existente'
  }
}

console.log(nomeDoMes(0))
