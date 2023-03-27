// Questão 8 da lista
//Todas as questões foram testadas no console do navegador Chrome

const primeiroValor = parseFloat(prompt("Digite o primeiro valor que deseja realizar uma operação."))
const segundoValor = parseFloat(prompt("Digite o segundo valor que deseja realizar uma operação."))
const operacao = prompt("Digite o tipo de operação: + (soma) - (subtração) * (multiplicação) / (divisão).")

if (segundoValor != 0){
    if (operacao == "+"){
        console.log(primeiroValor + segundoValor)
    } else if (operacao == "-"){
        console.log(primeiroValor - segundoValor)
    } else if (operacao == "*"){
        console.log(primeiroValor * segundoValor)
    } else if (operacao == "/"){
        console.log(primeiroValor / segundoValor)
    } else {
        console.log("A operação escolhida é inválida.")
    }
} else {
    console.log("Erro: divisão por zero não é permitido.")
}