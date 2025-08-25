/*
Lucas Caetano tem 21 anos,pesa 71kg
tem 1.83 de altura e seu IMC é de 
*/

const nome = 'Lucas';
const sobrenome = 'Caetano';
const idade = 21;
const peso = 71;
const altura = 1.83;
let imc = peso / (altura*altura)
let anoNascimento = idade - 2025

//console.log(imc)
//console.log(anoNascimento)

// templete strings usando ${Variavel}
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento,'.');