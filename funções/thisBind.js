const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradgigmas: funcional e OO

const falaDePessoa = pessoa.falar.bind(pessoa) // o método bind é usado para vincular o this permanentemente ao objeto
falaDePessoa()