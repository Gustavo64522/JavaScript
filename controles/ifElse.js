const imprimirAprovacao = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!!')
    }
}
imprimirAprovacao(10)
imprimirAprovacao(4)
imprimirAprovacao('Epaa')   //Não gera erro, gera falso e falso é reprovado.
