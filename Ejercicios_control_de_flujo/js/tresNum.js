const resultado2 = document.getElementById("resultado2")
const num1TresNum = document.getElementById("num11")
const num2TresNum = document.getElementById("num12")
const num3TresNum = document.getElementById("num13")
const tresTxt = document.getElementById("tres-txt")

//HICE DOS FUNCIONES QUE SE LLAMAN DESDE OTRA PARA NO REPETIR MUCHO CÓDIGO

function tresNum(a) {
    const e = Number(num1TresNum.value)
    const f = Number(num2TresNum.value)
    const g = Number(num3TresNum.value)
    if (a === 1) {
        tresNum1(e, f, g)
    }
    else tresNum2(e, f, g)

}
//PARA CALCULAR SI LA SUMA DE LOS DOS PRIMEROS
//ES IGUAL AL TERCERO

function tresNum1(e, f, g) {

    if (e != null && f != null && g != null) {
        if ((e + f) === g) {
           
            tresTxt.innerHTML = `<p> La suma de los dos primeros ES igual al tercero </p>`
        }
        else {
            tresTxt.innerHTML = `<p> La suma de los dos primeros NO ES igual al tercero </p>`
        }
    }
}

//PARA CALCULAR SI LA DIFERENCIA ENTRE ELLOS ES IGUAL A 20

function tresNum2(e, f, g) {
    const num1Abs = Math.abs(e)
    const num2Abs = Math.abs(f)
    const num3Abs = Math.abs(g)
    const numArray = [num1Abs, num2Abs, num3Abs]
    let a = null
    let b = null
    tresTxt.innerHTML = ""

    for (let i = 0; i < numArray.length - 1; i++) {

        for (let g = i + 1; g < numArray.length; g++) {

            a = numArray[i] - numArray[g]

            console.log(a)

            if (Math.abs(a) === 20) {
               
                b = 1
                tresTxt.innerHTML =  tresTxt.innerHTML + `<p> La diferencia de ${numArray[i]} y ${numArray[g]} es 20 </p>`
            }
        }
    }

    if(b != 1) {
        tresTxt.innerHTML = `<p> Ninguno se diferencia en 20 </p>`
    }

}
