function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    
    if (Number(fAno.value) <= 0 || Number(fAno.value) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ' '
        var fEta = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade > 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-h-p.png')
                fEta = "Criança"
            } else if (idade <= 20) {
                img.setAttribute('src', 'imagens/jovem-h-p.png')
                fEta = "Jovem"
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/adulto-h-p.png')
                fEta = "Adulto"
            } else {
                img.setAttribute('src', 'imagens/velho-h-p.png')
                fEta = "Velho"
            }

        } else if (fSex[1].checked) {
            gênero = 'Mulher'
            if (idade > 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-m-p.png')
                fEta = "Criança"
            } else if (idade <= 20) {
                img.setAttribute('src', 'imagens/jovem-m-p.png')
                fEta = "Jovem"
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/adulto-m-p.png')
                fEta = "Adulta"
            } else {
                img.setAttribute('src', 'imagens/velho-m-p.png')
                fEta = "Velha"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${gênero} ${fEta} com ${idade} anos!`
        res.appendChild(img)
    }
}