function imprimeobj({ max = 1000, min = 0 }) {
  if (max < min) {
    return min - max
  }
  return max - min
}

console.log(imprimeobj({ max: 50, min: 10 }))

function imprimestr([max = 1000, min = 0]) {
  if (max < min) {
    return min - max
  }
  return max - min
}

console.log(imprimestr([9, 10]))
