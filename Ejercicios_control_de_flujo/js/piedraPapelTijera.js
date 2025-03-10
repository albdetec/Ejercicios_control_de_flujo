const piedra = document.getElementById("piedra")
let papel = document.getElementById("papel")
let tijera = document.getElementById("tijera")
img100px(piedra, papel, tijera) //LE DOY TAMAÑO A LAS IMÁGENES

let piedraRandom = document.getElementById("piedra-random")
let papelRandom = document.getElementById("papel-random")
let tijeraRandom = document.getElementById("tijera-random")
img100px(piedraRandom, papelRandom, tijeraRandom) //LE DOY TAMAÑO A LAS IMÁGENES

const imgSelected = document.getElementById("img-selected")
const imgRandom = document.getElementById("img-random")
let resolutionTxt = document.getElementById("resolution-txt")
let selection = Number(0)
let random = Number(0)
resolutionTx(`¡Juega!`)
let timer = {}

//FUNCION PARA MODIFICAR LA IMAGEN SELECCIONADA Y COGER LA SELECCIÓN

function piedraPapelTijera(e) {

    clearTimeout(timer)

    img100px(piedra, papel, tijera)

    if (e === "piedra") {
        imgSelected.value = "piedra"
        img150px(piedra)
        selection = 1
    }
    else if (e === "papel") {
        imgSelected.value = "papel"
        img150px(papel)
        selection = 2
    }
    else {
        imgSelected.value = "tijera"
        img150px(tijera)
        selection = 3
    }
//DESPUÉS DE UN TIEMPO SIN ACTIVIDAD PONGO LAS IMÁGENES AL VALOR INICIAL Y MANDO MENSAJE

    timer = setTimeout(() => {
        resolutionTx(`¡Prueba otra vez!`)
        img100px(piedra, papel, tijera)
        img100px(piedraRandom, papelRandom, tijeraRandom)
        imgSelected.value = ""
        imgRandom.value = ""
    }, 4000)

    getRandomInt()
}

//EL ORDENADOR JUEGA Y COGEMOS SU SELECCIÓN

function getRandomInt() {
    let randomNum = Math.floor(Math.random() * 3)
    img100px(piedraRandom, papelRandom, tijeraRandom)

    if (randomNum === 1) {
        imgRandom.value = "piedra"
        img150px(piedraRandom)
        random = 1

    }
    else if (randomNum === 2) {
        imgRandom.value = "papel"
        img150px(papelRandom)
        random = 2
    }
    else {
        imgRandom.value = "tijera"
        img150px(tijeraRandom)
        random = 3
    }

    resolution(selection, random)
    
}

//RESOLUCIÓN DEL JUEGO

function resolution(a, b) {

    switch (true) {

        case (a === b):
            resolutionTx(`¡Empate!`)
            break;

        case (a === 1 && b === 2):
            resolutionTxt.innerHTML = `¡Te gano!`
            break;

        case (a === 1 && b === 3):
            resolutionTx(`¡Ganaste!`)
            break;

        case (a === 2 && b === 1):
            resolutionTx(`¡Ganaste!`)
            break;

        case (a === 2 && b === 3):
            resolutionTx(`¡Te gano!`)
            break;

        case (a === 3 && b === 1):
            resolutionTx(`¡Te gano!`)
            break;

        case (a === 3 && b === 2):
            resolutionTx(`¡Ganaste!`)
            break;

        default: resolutionTx(`¡Prueba otra vez!`)
    }
}

function img100px(a, b, c) {
    const imgArray = [a, b, c]
    for (let i = 0; i < imgArray.length; i++) {
        imgArray[i].setAttribute("width", "100px")
    }
}

function img150px(e) {
    e.setAttribute("width", "150px")
}

function resolutionTx(e) {
    resolutionTxt.innerHTML = `<p> ${e} </p>`
}