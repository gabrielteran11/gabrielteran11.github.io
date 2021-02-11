let teclas = document.querySelectorAll('li')
let operaciones = document.getElementById('operaciones')
let borrarOperacion = document.getElementById('borrar')
let cantidadSignos = 0
let cantidadDecimales = 0

teclas.forEach(function(elemento) {
    elemento.addEventListener('click', (tecla) => {
        let atributo = tecla.target.getAttribute('class')
        let digito = tecla.target.innerHTML
        mostrarNumeros(digito, atributo)
    })
})

let mostrarNumeros = (digito, atributo) => {
    // todo: NUMEROS
    if (atributo === 'numero') {
        if (operaciones.innerHTML == 0) {
            operaciones.innerHTML = digito
            cantidadSignos = 0

        } else {
            operaciones.innerHTML += digito
            cantidadSignos = 0
        }
    }
    // todo: SIGNOS 
    if (atributo === 'signo' && cantidadSignos == 0) {
        operaciones.innerHTML += digito
        cantidadSignos++
        cantidadDecimales = 0
    }
    // todo: DECIMAL
    if (atributo === 'decimal' && cantidadDecimales == 0) {
        operaciones.innerHTML += digito
        cantidadDecimales++
    }
    // todo: IGUAL 
    if (atributo === 'igual') {
        operaciones.innerHTML = eval(operaciones.innerHTML)
    }

}

// todo: BORRAR
borrarOperacion.addEventListener('click', () => {
    operaciones.innerHTML = 0
})