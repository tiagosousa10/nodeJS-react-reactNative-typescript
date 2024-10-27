// setInterval 

/* function acao(){
    document.write('Executando ... <br/>')
}

/* var timer = setInterval(() => { // executa sempre
    document.write('Executando ..(((((.))))) <br/>');
},1000) */

/* setTimeout(() => {
    console.log("Executou o Timeout")
},3000) // executa apenas uma vez */


//var let e const

//Objectos

/* let pessoa = {
    nome: ' Tiago',
    idade: 26,
    altura:1.85,
    cargo:'Programador FullStack'
}

console.log(pessoa)

let carro = {
    nome: 'Golf 1.6',
    cor: 'Branco',
    potencia:'140cv'
}

console.log(carro) */

// array com objetos
/* let usuarios=[
    {nome:'Tiago',cargo:'Programador',status:'Ativo'},
    {nome:'Joana',cargo:'Eng.Civil',status:'Ativo'},
    {nome:'Andre',cargo:'Backend',status:'Ativo'}
]

console.log(usuarios) */


/* //Template Strings
let nome = 'Matheus';
let sobrenome= 'Fraga';
let idade=26;

//let mensagem= "Meu nome é " + nome + " " + sobrenome + "e eu tenho " +  idade+ " anos"

let mensagem = `O meu nome é ${nome} ${sobrenome} e tenho ${idade} anos` 

const arrayObjetos = [{nome:'Tiago'},{nome:'Joana'},{nome:'Andre'}]

console.log(mensagem, arrayObjetos) */



/* let pessoa = {
    nome:'Tiago',
    sobrenome: 'Sousa',
    cargo:'Programador',

}

/* console.log(pessoa.nome)
console.log(pessoa.cargo) */

/* let nome = 'TESTE';

const {nome:nomePessoa,cargo:abcd,sobrenome:qlqcoisa} = pessoa;

console.log(nomePessoa)
console.log(qlqcoisa)
console.log(abcd) */ 

/* 


let {0:tiagoteste, 2:terceiraPESSOA} = nomes;

console.log(tiagoteste, terceiraPESSOA) */


/* let nomes = ['Tiago','Sousa','Andre']

let [primeironome,segundonome,abcd]= nomes

console.log(primeironome)
console.log(segundonome)
console.log(abcd)
 */






//spread Operator
/* let primeiros = [1,2,3]

let numeros =[...primeiros,5,6,10]
console.log(numeros) */


//spread Operator
/* let pessoa = {
    nome:'Tiago',
    idade:45,
    cargo:'Programador'

}

let novaPessoa = {
    ...pessoa, //spread operator 
    status: 'ATIVO',
    cidade:'Porto',
    telefone:91732132131
}


console.log(novaPessoa) */


function novoUtilizador(info){
    let data = {
        ...info, // spread operator para obter as informaçoes de info e adicionar as restantes
        status:"ativo",
        inicio:"20/03/2023",
        codigo:"12356777"
    }
console.log(data)
}

novoUtilizador({nome:"Jose",sobrenome:"Silva",cargo:"DEV"})