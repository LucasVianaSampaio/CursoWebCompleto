const obj1 = new Object()
obj1.name = 'Lucas'

console.log(obj1)

function bomDia(nome, idade) {
  this.mensagem = () => {
    return `Bom dia ${nome} com idade de ${idade} anos`
  }
}

const lucas = new bomDia('Lucas', 20)
console.log(lucas.mensagem())

function calculaPontos(nome, ganhou){
  return {
    nome,
    pontuacao(){
      if(ganhou) {
        return `O time ${nome} tem mais três pontos`
      }
    }
  }
}

const palmeiras = calculaPontos('palmeiras', true)
console.log(palmeiras.pontuacao())