//PARECE QUE FUNCIONA BIEN PERO POR CONSOLA ME DA ESTE ERROR:
// RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity

function pino() {

    const pinoTxt = document.getElementById("pinoTxt").value
    const pinoNum = document.getElementById("pinoNum").value
    const numItems = (pinoNum * 2) - 1
    console.log(numItems)
    let espacio = "&nbsp"
    let a = 1
    let pino = document.getElementById("pino")

    //PINTO LA COPA DEL PINO

    pino.innerHTML = `${espacio.repeat((numItems - 1) / 2)} ${pinoTxt} ${espacio.repeat((numItems - 1) / 2)}`
    
    //PINTO LOS DEMÁS ELEMENTOS

    for (let i = 1; i < numItems; i++) {
        a = a + 2
        pino.innerHTML = pino.innerHTML + `<p> ${espacio.repeat((numItems - a) / 2)} ${pinoTxt.repeat(a)} ${espacio.repeat((numItems - a) / 2)} </p>`
    }
    console.log(numItems)
}