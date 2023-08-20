const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  }
}
console.log(JSON.stringify(obj)) //JSON É EM FORMATO DE DADOS
//console.log(JSON.parse('{a: 1, b: 2, c: 3}')) //transforma um JSON em um objeto
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //formato válido
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
