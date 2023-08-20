const name = 'Lucas'

function nomeMaiusculo(nome) {
  try {
    console.log(nome.toUpperCase())
  } catch (e) {
    console.log('deu erro')
  } finally {
    console.log('Finalizado')
  }
}

nomeMaiusculo(name)
