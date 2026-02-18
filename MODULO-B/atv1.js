function calcular() {
var inicio = Number(document.getElementById('txtnum').value)
var fim = Number(document.getElementById('txtnum2').value)
var passo = Number(document.getElementById('txtnum3').value)
var res = document.getElementById('res')

res.innerHTML = ''

if (passo <= 0) {
    alert('passo inválido! considerando passo = 1')
    passo = 1
}

for (var i = inicio; i < fim; i+= passo) {
    res.innerHTML += `${i}👉`
}
res.innerHTML += '🏁'
}