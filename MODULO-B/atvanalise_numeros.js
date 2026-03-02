    let arrayVazio = []
    let res = document.getElementById('div2')
    

function adicionar() {
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('opcoes')

    if (num == 0 || num > 100) {
        window.alert("Por favor, digite um número no range correto.")
    } else {
        arrayVazio.push(num)

        let item = document.createElement('option')
        item.text = `Número ${num} adicionado.`
        tab.appendChild(item)
    }
}

console.log(arrayVazio)
function finalizar() {
    let maior = arrayVazio[0]
    let menor = arrayVazio[0]
    let soma = 0

    //calculos menor e maior
    for (let i = 1;i< arrayVazio.length;i++) {
        if (arrayVazio[i] > maior) {
            maior = arrayVazio[i];
        }
    }

    for (let j = 1; j < arrayVazio.length;j++) {
        if (arrayVazio[j] < menor) {
            menor = arrayVazio[j]
        }
    }
//[1,3,5]
    //calculos soma
    for (let k = 0; k < arrayVazio.length;k++) {
        soma += arrayVazio[k]
    }

    //calculo media
    media = soma / arrayVazio.length
    
    res.innerHTML += `<p>Ao todo, temos ${arrayVazio.length} números registrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}