{
  {
    {
      {
        var sera = 'Será?'
      }
    }
  }
}
console.log(sera)

function teste() {
  var local = 123 // uma variável dentro de uma função tem seu escopo limitado a função, não importa se é var
}

teste()
console.log(local)
