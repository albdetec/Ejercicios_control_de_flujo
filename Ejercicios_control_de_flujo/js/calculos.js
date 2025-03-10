const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")
const btnTxt = document.getElementById("button")

//OPERACIONES CON NÚMEROS
//EL BOTÓN VA CAMBIANDO PARA CADA OPERACIÓN

btnTxt.innerText = "Suma"

function calculos() {
    const num1Value = Number(num1.value)
    const num2Value = Number(num2.value)
    switch (btnTxt.innerText) {

        case "Suma":
            const suma = num1Value + num2Value
            resultado.value = suma
            btnTxt.innerText = "Resta"
            break;

        case "Resta":
            const resta = num1Value - num2Value
            resultado.value = resta
            btnTxt.innerText = "Multiplicación"
            break;

        case "Multiplicación":
            const producto = num1Value * num2Value
            resultado.value = producto
            btnTxt.innerText = "Media"
            break;

        case "Media":
            const media = (num1Value + num2Value) / 2
            resultado.value = media
            btnTxt.innerText = "Más grande"
            break;

        case "Más grande":
            if (num1Value === num2Value) {
                alert("¡Son iguales!")
                btnTxt.innerText = "Suma"
            }
            if (num1Value != num2Value && num1Value > num2Value) {
                resultado.value = num1Value
                btnTxt.innerText = "Más pequeño"
            }
            if (num1Value != num2Value && num2Value > num1Value) {
                resultado.value = num2Value
                btnTxt.innerText = "Más pequeño"
            }
            break;

        case "Más pequeño":
            if (num1Value > num2Value) {
                resultado.value = num2Value
            }
            else {
                resultado.value = num1Value
            }
            setTimeout(() => {
                alert("¡Empezamos de nuevo!")
                btnTxt.innerText = "Suma"
                num1.value = null
                num2.value = null
                resultado.value = null
            }, 1000)
            break;
    }
}

//CALCULADORA

function calculadora(e, f) {
    const firstNum = document.getElementById("calc-first-num")
    const secondNum = document.getElementById("calc-second-num")
    const result = document.getElementById("calc-result")
    const calcTxt = document.getElementById("calc-txt")
    const num1 = Number(firstNum.value)
    const num2 = Number(secondNum.value)
    let a = 1

    if (num1 != 0 && num2 != 0) {

        switch (e) {

            case "suma":
                result.value = num1 + num2
                break;

            case "resta":
                result.value = num1 - num2
                break;

            case "multiplicacion":
                result.value = num1 * num2
                break;

            case "division":
                result.value = num1 / num2
                break;

            case "potencia":
                for (let i = 0; i < num2; i++) {
                    a = num1 * a
                }
                result.value = a
                break;

            case "raiz":
                result.value = Math.pow(num1, 1 / num2)
                break;

            case "salir":
                result.value = null
                firstNum.value = null
                secondNum.value = null
                break;
        }
        //AÑADO EL SÍMBOLO DE RAIZ Y UTILIZO <SUP>

        if (e === "raiz") {
            calcTxt.innerHTML = `<p> Operación seleccionada: ${e} <sup>${num2}</sup> ${f} ${num1} = ${result.value} </p>`
        }
        //PARA LA POTENCIA

        else if (e === "potencia") {
            calcTxt.innerHTML = `<p> Operación seleccionada: ${e} ${num1} <sup>${num2}</sup> = ${result.value} </p>`
        }
        //PARA SALIR
        else if (e === "salir") {
            calcTxt.innerHTML = `<p> </p>`
        }
        //LOS DEMÁS

        else calcTxt.innerHTML = `<p> Operación seleccionada: ${e} ${num1} ${f} ${num2} = ${result.value} </p>`
    }
}