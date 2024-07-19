/*var c = 1
while (c < 50) {
    console.log(`olá, passo ${c}`)
    c++
} */

/*var c = 0
do {
    console.log(`olá, passo ${c}`)
    c++
} while (c < 10)*/

var c = 1
var par = 0
var impar = 0
do {
    var r = 
    r = c%2
    if (r == 0) {
        par++
        console.log(`o número ${c} é par, e o número atual de pares é ${par}`)
    } else {
        impar++
        console.log(`o número ${c} é impar, e o número atual de impares é ${impar}`)
    }
    c++
} while (c <= 7825)
console.log(`O número total de pares é ${par}, enquanto o de impares é ${impar}`)