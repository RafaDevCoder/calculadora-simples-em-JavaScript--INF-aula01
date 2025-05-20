let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

/* variável base para mostrar o uso dos operadores*/
let resultado = 0;

/* Adição*/
resultado = num1;
resultado += num2;
console.log(`Adição: ${num1} + ${num2} = ${resultado}`);

/*Subtração*/
resultado = num1;
resultado -= num2;
console.log(`Subtração: ${num1} - ${num2} = ${resultado}`);

/*Multiplicação*/
resultado = num1;
resultado *= num2;
console.log(`Multiplicação: ${num1} * ${num2} = ${resultado}`);

/*Divisão*/
resultado = num1;
resultado /= num2;
console.log(`Divisão: ${num1} / ${num2} = ${resultado}`);

/*Resto da divisão*/
resultado = num1;
resultado %= num2;
console.log(`Resto da divisão: ${num1} % ${num2} = ${resultado}`);
