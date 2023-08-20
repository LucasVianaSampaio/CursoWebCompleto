const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
funcs[8]()

//O VAR NÃO TEM ESCOPO DE BLOCO ENTÃO ELE NÃO LEMBRA NO VALOR ANTERIOR
