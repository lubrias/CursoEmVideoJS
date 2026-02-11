function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO. Ajeita isso aí.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            res.innerHTML = `Olha, você é homem. Não sei se davi gosta.
            Pergunte pra ele.`
        } else {
            genero = 'Mulher'

            if (idade >=0 && idade <12 ) {
                img.setAttribute('src','img/criança-mulher.jpg')
                res.innerHTML = `Você está na idade perfeita para davi: ${idade} anos.`
            } else if (idade < 15) {
                res.innerHTML = `Já ta meia velha mas dá pro gasto`
            } else {
                res.innerHTML = `Já tá velha demais. Pode morrer já.`
            }
        }
        
    }
}