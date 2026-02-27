// function parimp(n) {
//     if (n % 2 == 0) {
//         console.log('par')
//     } else {
//         console.log('impar')
//     }
// }

// let res = parimp(10)

let numero1 = 5
let numero2 = 5
function soma(n, n2) {
    return n+n2
}

function multip(n, n2) {
    return n*n2
}

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1;c--) {
        fat = c * fat
    }
    return fat;
}

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}

console.log(`A soma entre ${numero1} e ${numero2} é igual à ${soma(numero1,numero2)}`)
console.log(`A multiplicação entre ${numero1} e ${numero2} é igual à ${multip(numero1,numero2)}`)

console.log(`O fatorial de ${numero2} é ${fatorial(numero2)}`)

console.log('fatorial 2:' + fatorial2(5))
