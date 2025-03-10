function tobogan() {

    let tobogan = prompt("¿Cuántos años tienes?")

    if (tobogan != null && tobogan > 0) {
        if (Number(tobogan) < 8) {
            alert("Pasa al tobogán")
        }
        else alert("Eres demasiado mayor para usar el tobogán")
    }

    else {
        alert("Esa edad no es válida")
    }
}