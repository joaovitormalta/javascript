var sem = document.querySelector("section#semana")
var img = document.querySelector("img#img")
var agora = new Date()
var dia = agora.getDay()


if (dia == 0) {
    sem.innerHTML = `Hoje é Domingo`
    img.src = 'imagens/domingo-p.png'
    document.body.style.backgroundColor = '#92AC4D'
} else if (dia == 1) {
    sem.innerHTML = `Hoje é Segunda`
    img.src = 'imagens/segunda-p.png'
    document.body.style.backgroundColor = '#0D0F11'
} else if (dia == 2) {
    sem.innerHTML = `Hoje é Terça`
    img.src = 'imagens/terça-p.png'
    document.body.style.backgroundColor = '#5E4528'
} else if (dia == 3) {
    sem.innerHTML = `Hoje é Quarta`
    img.src = 'imagens/quarta-p.png'
    document.body.style.backgroundColor = '#B7A591'
} else if (dia == 4) {
    sem.innerHTML = `Hoje é Quinta`
    img.src = 'imagens/quinta-p.png'
    document.body.style.backgroundColor = '#140F15'
} else if (dia == 5) {
    sem.innerHTML = `Hoje é Sexta`
    img.src = 'imagens/sexta-p.png'
    document.body.style.backgroundColor = '#CD7401'
} else if (dia == 6) {
    sem.innerHTML = `Hoje é Sábado`
    img.src = 'imagens/sábado-p.png'
    document.body.style.backgroundColor = '#887356'
} else {
    sem.innerHTML = `Dia Inválido`
}

/* 
    Domingo = 0
    Segunda = 1 
    Terça = 2
    Quarta = 3
    Quinta = 4 
    Sexta = 5
    Sábado = 6
*/