function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com ' + nota)
  } else {
    console.log('Reprovado com ' + nota)
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdade...' + valor)
  } else {
    console.log('É falso...' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo()
