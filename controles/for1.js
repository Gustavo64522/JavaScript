let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) { //Início ; Paraâmetro ; incrementro
    console.log(`i = ${i}`)
}

const notas = [6.5, 7.5, 8.5, 9.5, 10, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {    // O .lenght mostra o tamanho do array, no caso 7 elementos, enquanto o i for menor que 7
    // acrescentar 1 em i e printar a nota. 
    console.log(`nota = ${notas[i]}`)
}