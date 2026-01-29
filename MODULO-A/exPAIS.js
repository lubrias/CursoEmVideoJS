function saber() {
    var pais = window.document.getElementById('txtpais').value
    var res = window.document.getElementById('res')
    if (pais.toLowerCase() == 'brasil') {
        res.innerHTML = `Olá, você é do Brasil`
        res.innerHTML += `<p>Seja bem vindo ao seu país.</p>`
    } else {
        res.innerHTML = `<p><strong>Nossa você é gringo! Seja bem vindo ao país</p></strong>`
    }
    
}