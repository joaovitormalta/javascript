function tabuada() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')

    if (num.value.length == 0 ) {
        alert("[ERRO] Falta Dados, digite um NÚMERO [ERRO]")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ' '

        for(var c = 0; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}