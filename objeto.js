const Pessoa = {
    nome: 'Ícaro',
    idade: 18,
    // falando: () =>{
    //     console.log('aasa')
    // }
}

Pessoa.nome = 'manel'
Pessoa.altura = 1.90
delete Pessoa.altura
console.log(Pessoa)
