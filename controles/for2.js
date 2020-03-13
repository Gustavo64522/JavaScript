const notas = [6, 7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i]) //Percorre os indices
}

const pessoa = {
    Nome: 'Ana',
    Sobrenome: 'Silva',
    Idade: 20,
    Peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)    //Percorre os atributos do objeto
}