function tratarErroELancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'Mensagem de erro
  /*throw {
    nome: erro.name,
    msg: erro.msg,
    date: new Date

  }*/

  throw 'Deu erro, amigo'
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('Finalizado')
  }
} //alguns códigos tem a possibilidade maior de ocorrer erros

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)
