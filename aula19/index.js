const pessoa1 = {
    nome: 'Lucas',
    Sobrenome: 'Caetano',
    idade: 21,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
    
    /*fala() {
          console.log(`${this.nome} ${this.Sobrenome} está falando oi...`);
    }
    */
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

/*function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Lucas', 'Cateano', 21);
console.log(pessoa1.nome);
*/