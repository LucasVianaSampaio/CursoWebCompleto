const tipoTriangulo = (x, y, z) => {
  if (x == y && x == z) {
    return 'O seu triângulo é Equilátero'
  } else if (x == y || y == z || x == z) {
    return 'O seu triângulo é Isósceles'
  } else {
    return 'O seu triângulo é Escaleno'
  }
}

console.log(tipoTriangulo(2, 1, 3))
