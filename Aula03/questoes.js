// Todas as questões foram testadas no console do naveador.
// Questão 01
let notaT1 = 5.2
let notaT2 = 4.8
let notaP1 = 9.1


if (notaT1 >= 0 && notaT1 <= 10 && notaT2 >= 0 && notaT2 <= 10 && notaP1 >= 0 && notaP1 <= 10) {
 
  let media = (notaT1 + notaT2 + notaP1) / 3;

  if (media < 5) {
    console.log("Reprovado! Sua média é " + media.toFixed(2));
  } else if (media >= 5 && media <= 7) {
    console.log("Recuperação! Sua média é " + media.toFixed(2));
  } else {
    console.log("Parabéns! Sua média é " + media.toFixed(2));
  }
} else {
  console.log("Uma ou mais notas são inválidas.");
}

// Questão 02

let soma = 0;
let cont = 0;
let numero = 1;

while (cont < 50) {
  if (numero % 2 == 0) {
    soma += numero;
  }
  cont = cont + 1;
  numero++;
}

console.log("A soma dos primeiros 50 números pares é: " + soma);

// Questão 03
  var segundos = 0;
  var minutos = 0;
  var horas = 0;
  
  let intervalo = setInterval(function() {
    console.log(horas + ":" + minutos + ":" + segundos);
    segundos++;
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
      if (minutos >= 60) {
        minutos = 0;
        horas++;
        if (horas >= 24) {
          horas = 0;
        }
      }
    }
  }, 1000);
  
  setTimeout(function() {
    clearInterval(intervalo);
  }, 60 * 1000);

// Questão 04

var opcao;

do {
  opcao = prompt("Escolha uma das opções: \n1. Fazer checkin\n2. Fazer checkout\n3. Estender hospedagem\n4. Sair");

  switch (opcao) {
    case "1":
      alert("Bem-vindo!");
      break;
      
    case "2":
      const confirmacao = confirm("Tem certeza que deseja fazer o checkout?");
      if (confirmacao == True) {
        alert("Obrigado pela hospedagem, volte sempre!");
      }
      break;
      
    case "3":
      const dias = Number(prompt("Quantos dias gostaria de estender a hospedagem?"));
      if (dias > 0 && !isNaN(dias)) {
        alert(`A hospedagem foi estendida em ${dias} dias.`);
      } else {
        alert("Número inválido.");
      }
      break;
      
    case "4":
      alert("Ok.");
      break;
      
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "4");

// Questão 5

let quantidadeCarbono1
let quantidadeCarbono2

quantidadeCarbono1 = Number(prompt("Digite a quantidade de carbono da primeira substância:"));
quantidadeCarbono2 = Number(prompt("Digite a quantidade de carbono da segunda substância:"));

quantidadeCarbono2 = quantidadeCarbono2 + 2;

if (quantidadeCarbono1 === quantidadeCarbono2) {
  console.log("As quantidades de carbono são iguais.");
} else {
  console.log("As quantidades de carbono são diferentes.");
}

// Questão 6

var numeroQuestao6 = 1;

while (numeroQuestao6 <= 100) {
  if (numeroQuestao6 % 2 === 0) {
    console.log(numeroQuestao6);
  }
  numeroQuestao6 = numeroQuestao6 + 1;
}

console.log("FIM");

//Questão 07

var idade;

do {
  idade = parseInt(prompt("Digite sua idade"));
} while (isNaN(idade));

alert(idade);

// Questão 08

const anoAtual = 2023;
const salarioInicial = 1000.00;
let salarioAtual = salarioInicial;
let percentualAumento = 0.015;
let percentualAumentoTotal = 0;
let anoContrato = 2013

console.log(`Salário em ${anoAtual - 1}: R$ ${salarioInicial.toFixed(2)}`);

for(let ano = anoContrato + 1; ano <= anoAtual; ano++) {
if(ano >= 2017) {
percentualAumento =  percentualAumento * 2;
}
salarioAtual += salarioAtual * percentualAumento;
percentualAumentoTotal += percentualAumento;
console.log(`Salário em ${ano}: R$ ${salarioAtual.toFixed(2)}`);
console.log(`Percentual de aumento em ${ano}: ${(percentualAumento * 100).toFixed(2)}%`);
}

console.log(`O percentual de aumento total desde 2013 é: ${(percentualAumentoTotal * 100).toFixed(2)}%`);


// Questão 09

let num1 = 0;
let num2 = 1;
let proximoNumero;

console.log(num1);
console.log(num2);

for (let i = 3; i <= 20; i++) {
  proximoNumero = num1 + num2;
  console.log(proximoNumero);
  num1 = num2;
  num2 = proximoNumero;
}

// Questão 10

// Função para obter o tipo de mercadoria
function obterTipoMercadoria() {
    return prompt("Digite o tipo de mercadoria:");
    }
    
    // Função para obter o valor de custo
    function obterValorCusto() {
    return parseFloat(prompt("Digite o valor de custo da mercadoria:"));
    }
    
    // Função para calcular o valor de compra com acréscimo de 75%
    function calcularValorCompra(valorCusto) {
    return valorCusto * 1.75;
    }
    
    // Função para calcular o valor com desconto
    function calcularValorComDesconto(valor, desconto) {
    return valor * (1 - desconto/100);
    }
    
    // Função principal que chama as outras funções e realiza a consulta de preço
    function consultarPreco() {
    const tipoMercadoria = obterTipoMercadoria();
    const valorCusto = obterValorCusto();
    
    const valorCompra = calcularValorCompra(valorCusto);
    console.log(`O valor de compra da mercadoria é R$ ${valorCompra.toFixed(2)}.`);
    
    const desconto = parseFloat(prompt("Digite o desconto em % (digite 0 se não houver desconto):"));
    if (desconto > 0) {
    const valorComDesconto = calcularValorComDesconto(valorCompra, desconto);
    console.log(`O valor com desconto é R$ ${valorComDesconto.toFixed(2)}.`);
    } else {
    console.log("Não há desconto aplicado.");
    }
    }
    
    // Chamada da função principal
    consultarPreco();