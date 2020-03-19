//  Função em JS é First-Class Object (Citizens)
//  Higher-order function

//Criar de forma literal
function fun1() { }

//Armazenar uma função em uma variável ou constante
const fun2 = function () { }
let fun3 = function () { }

//  Armazenar uma função em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))