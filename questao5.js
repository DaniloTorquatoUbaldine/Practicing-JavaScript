// Questão 5 da lista
//Todas as questões foram testadas no console do navegador Chrome

const segundos = 200000
const dias = segundos / 86400
var resto = segundos - (86400 * Math.floor(dias))
const horas = resto / 3600
resto = resto - (3600 * Math.floor(horas))
const minutos = resto / 60
var segundosFinal = resto - (60 * Math.floor(minutos))

console.log(segundos + " segundos tem: " + Math.floor(dias) + " dias, " + Math.floor(horas) + " horas, " + Math.floor(minutos) + " minutos, e " + segundosFinal + " segundos.")


