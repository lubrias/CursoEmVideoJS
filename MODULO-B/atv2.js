function tabuada() {
    let numero = Number(document.getElementById('numero').value)
    let res = document.getElementById('seltab')

    if (numero <= 0) {
        window.alert('Número inválido. Considerando multiplicação por 1.')
        numero = 1
    }

    let c = 1
    res.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = numero + ' x ' + c + ' = ' + (numero*c)
        item.value = 'res' + c
        res.appendChild(item)
        c++
    }
}