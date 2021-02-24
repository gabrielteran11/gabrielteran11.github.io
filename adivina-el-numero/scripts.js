let p = {
    input: document.querySelector('.input'),
    btn: document.getElementById('button'),
    resultados: document.querySelector('.resultados'),
    indicador: document.querySelector('.indicador'),
    detalles: document.querySelector('.detalles'),
    button: document.createElement('button'),
    numberRandom: Math.floor(Math.random() * (100 - 10)) + 10,
    cantidadNumeros: 1,
    cantidadResultados: 1,
    puntos: document.querySelector('.puntos')
}

console.log("numero random", p.numberRandom)


let m1 = {
    resultados: () => {
        let results = localStorage.getItem("cantidadPuntos")
        p.puntos.textContent = results
    },

    inicioJuego: () => {
        let numerosIngresados = p.input.value

        if (p.cantidadResultados == 1) {
            p.resultados.textContent = "Ingresados previamente: "
        }
        p.resultados.textContent += numerosIngresados + " "

        if (numerosIngresados == p.numberRandom) {
            p.puntos.textContent++
                p.detalles.style.display = 'block'
            p.indicador.style.background = '#11698e'
            p.indicador.textContent = "Adivinaste"

            m2.reinicioJuego()

        } else if (numerosIngresados > 100) {
            p.detalles.style.display = 'block'
            p.indicador.style.background = '#f0a500'
            p.indicador.textContent = "El numero es muy alto"
            p.button.style.display = 'none'


        } else if (numerosIngresados < p.numberRandom) {
            p.detalles.style.display = 'block'
            p.indicador.style.background = '#e45826'
            p.indicador.textContent = "El numero es bajo"
            p.button.style.display = 'none'

        } else if (numerosIngresados > p.numberRandom) {
            p.detalles.style.display = 'block'
            p.indicador.style.background = '#845ec2'
            p.indicador.textContent = 'El numero es alto'
            p.button.style.display = 'none'
        }

        //console.log("cantidadnumeros", p.cantidadNumeros)
        if (p.cantidadNumeros == 10) {
            p.puntos.textContent--
                p.indicador.style.background = '#e40017'
            p.indicador.textContent = 'Has fallado'
            m2.reinicioJuego()

        }
        p.cantidadNumeros++
            p.cantidadResultados--

            localStorage.setItem("cantidadPuntos", p.puntos.textContent)
    }
}
m1.resultados()
p.btn.addEventListener('click', () => {

    m1.inicioJuego()
    p.input.value = ""
})

let m2 = {
    reinicioJuego: () => {
        p.button.style.display = 'block'
        p.detalles.append(p.button)
        p.button.textContent = 'Reiniciar Juego'
        p.button.classList.add("btn", "btn-outline-dark")
        p.btn.disabled = true
        p.button.addEventListener('click', m2.restablecerValores)
    },
    restablecerValores: () => {
        p.detalles.style.display = 'none'
        p.btn.disabled = false
        p.input.value = ""
        p.cantidadNumeros = 1
        p.cantidadResultados = 1
        p.numberRandom = Math.floor(Math.random() * (100 - 10)) + 10
        console.log("numero random desde m2", p.numberRandom)
    }
}