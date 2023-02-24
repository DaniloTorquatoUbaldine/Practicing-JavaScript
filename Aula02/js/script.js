// 1

function changeText(text) {
    document.getElementById('mudarTexto').innerText='O texto foi alterado';
}

// 2

const colorPicker = document.getElementById('color-picker');
const texto = document.getElementById('trocar');

colorPicker.addEventListener('input', function() {
  const color = colorPicker.value;
  text.style.color = color;
  texto.style.color = color;
})

// 3

var cont = 0;
            function incrementarUm() {
                cont = cont + 1;
                atualizar(parseInt(cont));
            }

            function resetarCont() {
                cont = 0;
                atualizar(cont);
            }

            function atualizar(cont) {
                console.log(cont);
                document.getElementById('trocar2').innerHTML = parseInt(cont);
            
            }

// 4 

function aplicarFiltro(filter) {
    var image = document.getElementById("goku");
    switch(filter) {
      case "none":
        image.style.filter = "none";
        break;
      case "grayscale":
        image.style.filter = "grayscale(100%)";
        break;
      case "sepia":
        image.style.filter = "sepia(100%)";
        break;
      default:
        image.style.filter = "none";
    }
  }

// 5

function calcular() {

    const num1 = parseInt(document.getElementById("numero1").value)
    const num2 = parseInt(document.getElementById("numero2").value)
    const operador = document.getElementById("operador").value
    
    let result;
    switch (operador) {
      case "+":
        result = num1 + num2
        break
      case "-":
        result = num1 - num2
        break
      case "*":
        result = num1 * num2
        break
      case "/":
        result = num1 / num2
        break
      default:
        result = ""
    }

    document.getElementById("resultado").textContent = result
  }
  
  function limpar() {

    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("operador").selectedIndex = 0
    document.getElementById("resultado").textContent = ""
  }

// 6

let display = document.getElementById("display")

function add2(value) {
  display.value += value
}

function limpar2() {
  display.value = ""
}

function deletar2() {
  display.value = display.value.slice(0, -1)
}

function calcular2() {
  let result = eval(display.value)
  display.value = result
}

