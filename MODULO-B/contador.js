function calcular() {
    let inicio = Number(document.getElementById('numero1').value)
    let fim = Number(document.getElementById('numero2').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')

    res.innerHTML = ''

    if (passo <= 0) {
        window.alert('[ERRO] Considerando o passo como 1.')
        passo = 1;
    }

    if (inicio < fim) {
        res.innerHTML= 'Contagem crescente.<br>'
        for (var i = inicio;i<(fim+1);i+=passo) {
            res.innerHTML += i + '➡️'
        }
        res.innerHTML += "🏁"
    }
}