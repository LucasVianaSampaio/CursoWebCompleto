const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
funcs[8]()

//O LET TEM ESCOPO DE BLOCO ENTÃO ELE LEMBRA DO VALOR ANTERIOR
