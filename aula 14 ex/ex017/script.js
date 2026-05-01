function gerarTabuada() {
    var num = document.getElementById('num').value
    var tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ''
    if (num.length == 0) {
        alert('Por favor, digite um número!')
        return
    } else {
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tabuada.appendChild(item)
            tabuada.style.width = '125px'
        }
    }
}