// 3- Usando variáveis numéricas, calcule e exiba:
// Soma
// Subtração
// Multiplicação
// Divisão
// Resto da divisão


let n1 = 5;
let n2 = 3;

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let resto = n1 % n2;


console.log("====================================");

console.log("Valores: " + n1 + " e " + n2)
console.log("O resultado da soma é: " + soma);
console.log("O resultado da subtracao é: " + subtracao);
console.log("O resultado da multiplicacao é: " + multiplicacao);
console.log("O resultado da divisao é: " + divisao);
console.log("O resultado da resto é: " + resto);


console.log("====================================");


//4 - Compare duas variáveis e exiba no console se elas são iguais ou diferentes.

if(n1 === n2) {
    console.log("As variáveis são iguais");
} else {
    console.log("As variáveis são diferentes");
}


console.log("====================================");


//Use operadores lógicos para:
    // Verificar se um número é maior que 10 e menor que 50.

    

let num1 = 25;
let num2 = 15;

console.log("Valor: " + num1)

if (num1 > 10 && num1 < 50) {
    console.log(num1 + " é maior que 10 e menor que 50");
} else {
    console.log(num1 + " não é maior que 10 e menor que 50");
}

// Verificar se um número é menor que 5 ou maior que 20.


console.log("Valor: " + num1)

if (num2 < 5 || num2 > 20) {
    console.log(num2 + " é menor que 5 ou maior que 20");
} else {
    console.log(num2 + " não é menor que 5 ou maior que 20");
}