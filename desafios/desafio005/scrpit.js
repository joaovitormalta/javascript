let num = document.querySelector('input#txtn')
let tab = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} inserido`
        tab.appendChild(item)
        res.innerHTML = " "
        
    } else {
        alert(`[ERRO] Número ${num.value} Repetido ou inválido [ERRO]`)
    }
    num.value = " "
    num.focus()
}

function finalizar() {

    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length 
        let M = valores[0]
        let m = valores[0]
        let s = 0
        res.innerHTML = ' '

        for(let c in valores) {
            if (valores[c] > M) {
                M = valores[c]
            }
            if (valores[c] < m) {
                m = valores[c]
            }
            s += valores[c]
        }
        let med = s/tot
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${M}</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${m}</p>`
        res.innerHTML += `<p>A soma dos valores encontrados foi ${s}</p>`
        res.innerHTML += `<p>A média dos valores encontrados foi ${med.toFixed(2)}</p>`
        
    }
        
}