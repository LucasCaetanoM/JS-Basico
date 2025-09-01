/*
Primitivos (Imutáveis)- string, number, boolean, undefined, 
null (bigint, symbol) - Valores Copiados

Referência (Mutável)- array, object, function - Passados por referência
*/

const a ={
    nome: 'Lucas',
    sobrenome: 'Caetano'
};

const b = {...a};

a.nome = "João"
console.log(a);
console.log(b);

/*
let a = [1, 2, 3];
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Lucas');
console.log(c);
*/