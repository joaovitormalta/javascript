function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 18
    if (hora == 1) {
        msg.innerHTML = `Agora são ${hora} hora`
    } else {
        msg.innerHTML = `Agora são ${hora} horas`
    }

    if (hora >= 0 && hora < 6) {
        img.src = 'imagens/madrugada-c-p.png'
        document.body.style.backgroundColor = '#24424A'
    } else if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha-c-p.png'
        document.body.style.backgroundColor = '#BCB289'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde-c-p.png'
        document.body.style.backgroundColor = '#FDC391'
    } else {
        img.src = 'imagens/noite-c-p.png'
        document.body.style.backgroundColor = '#3E3A75'
    }
}