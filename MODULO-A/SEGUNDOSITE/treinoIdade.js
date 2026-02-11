function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    // importa a data

    var fano = document.getElementById('txtano')
    // pegar o ano do user em formato de texto

    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value >= ano) {
        window.alert("ERRO")
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <15) {
                img.setAttribute('src', 'img/criança-homem.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'img/jovem-homem.jpg')
            } else {
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade <15) {
                img.setAttribute('src', 'img/criança-mulher.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            } else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}