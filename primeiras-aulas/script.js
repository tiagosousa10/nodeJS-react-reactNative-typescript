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


/* function novoUtilizador(info){
    let data = {
        ...info, // spread operator para obter as informaçoes de info e adicionar as restantes
        status:"ativo",
        inicio:"20/03/2023",
        codigo:"12356777"
    }
console.log(data)
}

novoUtilizador({nome:"Jose",sobrenome:"Silva",cargo:"DEV"}) */





//REST operator -> recebo todos os parametros atraves de um array tipo any

/* function convidados(...nomes){
   console.log("SEJA BEM VINDO")
    console.log(...nomes)
}

convidados('Tiago','Andre','Moura','qlqCoisa') */

//rest operator
/* function sorteador(...numeros){
    console.log(numeros.length)
//    const numeroGerado = (Math.random() * numeros.length).toFixed(2)
    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log("Numero gerado foi : " + " - " + numeros + " | " + numeroGerado + " | " + numeros[numeroGerado])
}

sorteador(1,2,3,4,77,93,33,45) */



// MAP

/* let lista = ['TiagoITEM','AndreITEM','MouraITEM','SousaITEM','item']

lista.map((item,index)=> {
    console.log(`Passando: ${item}  - Esta na posiçao ${index}`)
}) */



    //reduce = o reduce serve para reduzir um array


 /*    let numeros = [5,3,2,5];

    let total = numeros.reduce((acumulador,numero,indice,original)=> {
        console.log(`${acumulador} - total até o momento`)
        console.log(`${numero} - valor atual`)
    //    console.log(`${indice} - indice atual`)
  //      console.log(`${original} - array`)
        console.log("--------------------------------")


        return acumulador += numero

    })


    console.log("TOTAL DO REDUCE " + total)
 */


    //              FIND -devolve apenas 1

  /*   let listagem = [5,3,'jose',2,'matheus']

    let busca = listagem.find((item)=> {
        //condicao
       
          return  item === 'matheus'
     
    })
    console.log(busca)


    //filter  -devolve tudo o que encontrar

    let palavras = ['matheus','Ana','Tiago','QualquerCoisa','Programador']

    let pesquisa = palavras.filter((item)=> {
    return item.length >= 5 // comprimento do "item"
    })

    console.log(pesquisa) */


    //                              funcoes anonimas

    /* 
    () => {}

        1- () => recebe os argumentos
        2- => arrow ou seta
        3- {} - bloco de codigo que representa o corpo da funcao

    */


/*         function somar (a,b){
            let total= a+b;
            return console.log(total)
        }

        //somar(10,30)

        let subtrair = (valor1,valor2) => {
            let total = valor1 - valor2;
            console.log(total)
        }

        subtrair(31,27)

        let numeros = [1,3,5,10];

        numeros.map((item)=> {
                //Logica do MAP
                console.log(item)
        }) */



    //includes,startsWith, endsWith

/*     let nomes = ['Matheus','Lucas', 'Jose']
console.log(nomes.includes('Matheus'))

if(nomes.includes('Matheus -')){
    console.log('TRUE- está na LISTA!')
} else{
    console.log('FALSE ! - ERRO!')
} */

    let nome = 'Tiago'
    console.log(nome.startsWith('Ti')) // cuidado é case sensitive

    console.log(nome.endsWith('o'))