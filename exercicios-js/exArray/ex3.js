//uma função que retorna o salário de um funcionário baseado nas horas trabalhadas

const calcularSalario = (horasPorMes, recebimentoPorHora) => {
  return `Salário igual a R$ ${horasPorMes * recebimentoPorHora}`
}

console.log(calcularSalario(40, 2))
