function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/criança-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/jovem-homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src','img/idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/criança-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/jovem-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}