function somar() {
            var n1 = window.document.getElementById("soman1")
            var n2 = window.document.getElementById("soman2")
            var res= window.document.getElementById("res")
            var soman1 = Number(n1.value)
            var soman2 = Number(n2.value)
            var s = soman1+soman2
            res.innerText= `A soma entre ${soman1} e ${soman2} é igual à ${s}.`
        }

        function multiplicar() {
            var n1 = window.document.getElementById('multiplicacaon1')
            var n2 = window.document.getElementById('multiplicacaon2')
            var res2 = window.document.getElementById('res2')
            var multiplicacao1 = Number(n1.value)
            var multiplicacao2 = Number(n2.value)
            var m = multiplicacao1*multiplicacao2
            res2.innerText = `A multiplicação entre ${multiplicacao1} e ${multiplicacao2} é igual à ${m}.`
        }

        function subtrair() {
            var n1 = window.document.getElementById('subtracaon1')
            var n2 = window.document.getElementById('subtracaon2')
            var res3 = window.document.getElementById('res3')
            var subtracaon1= Number(n1.value)
            var subtracaon2 = Number(n2.value)
            var sub = subtracaon1 - subtracaon2
            res3.innerText = `A subtração entre ${subtracaon1} e ${subtracaon2} é igual à ${sub}.`
        }

        function dividir() {
            var n1 = window.document.getElementById('divisaon1')
            var n2 = window.document.getElementById('divisaon2')
            var res4 = window.document.getElementById('res4')
            var divisaon1 = Number(n1.value)
            var divisaon2 = Number(n2.value)
            var div = divisaon1 / divisaon2
            res4.innerText = `A divisão entre ${divisaon1} e ${divisaon2} é igual à ${div}.`
        }