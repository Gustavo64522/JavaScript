function soma() {
    let soma = 0

    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2, 3))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1, 2, 'Concatena a string'))
console.log(soma('a', 'b', 'c', '  - O zero permanece'))