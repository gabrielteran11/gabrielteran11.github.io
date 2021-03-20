document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('texto')
    const btn = document.getElementById('btn')
    const lista = document.getElementById('lista')

    let textos = JSON.parse(localStorage.getItem('listaTextos')) || []

    let enviar = () => {
        
        lista.innerHTML = ''
        let imprimir = textos.map(texto => {
            lista.innerHTML += `
            <li class="elemento list-group-item list-group-item-primary">
            <span class="span">${texto}</span>
            <img class="svg" src="./delete.svg" alt="">
        </li>
            `
        })

        let elementos = document.querySelectorAll('#lista li img')
        elementos.forEach((elemento, i) => {
            elemento.addEventListener('click', () => {
                console.log(elemento.parentNode, i)
                elemento.parentNode.removeChild(elemento)
                textos.splice(i, 1)
                guardar(textos)
                enviar()
            })
        })
    }

    enviar()

    let guardar = (textos) => {
        const ssss =  JSON.stringify(textos)
        localStorage.setItem('listaTextos', ssss)
        
    }

    btn.addEventListener('click', () => {
        textos.push(texto.value)
        guardar(textos)
        enviar()
        texto.value = ''
    })

    
})

