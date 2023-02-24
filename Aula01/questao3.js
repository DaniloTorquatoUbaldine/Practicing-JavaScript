// Questão 3 da lista
//Todas as questões foram testadas no console do navegador Chrome

const inputDoUsuario = prompt("Digite uma palavra, por favor.")

//a

if (inputDoUsuario == "SIM"){
    console.log("Parabéns!")
}

//b

if (inputDoUsuario == "NÃO"){
    const inputDoUsuario = prompt("Digite novamente uma palavra, por favor.")
    alert(inputDoUsuario)
}

//c

if (inputDoUsuario != "NÃO" && inputDoUsuario != "SIM"){
    alert("Você tem noção dos seus atos?")
}

