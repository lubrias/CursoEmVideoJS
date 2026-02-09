function carregar() {
    var div1 = document.getElementById('div1')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    div1.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 12) {
        //Manhã
        img.src = 'img/amanhecer.jpg'
        document.body.style.background = "#e2cd9f" 
    } else if (hora <18) {
        //Tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = "#b9846f"
    } else {
        //Noite
        img.src = 'img/noite.jpg'
        document.body.style.background = "#515154"
    }
}