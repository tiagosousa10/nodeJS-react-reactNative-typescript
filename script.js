/* var area = document.getElementById('area')
//entrar
function entrar(){
   var nome = prompt('Digite o seu nome')

   if(nome === '' || nome === null){
    alert('deu algo errado!')
    area.innerHTML="Clique no botao para acessar..."
   }else{
    area.innerHTML="Bem vindo" +" "+ nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da Conta";
    botaoSair.onclick   =   sair;
    area.appendChild(botaoSair)
   }

}
//sair
function sair(){
    alert('Até mais !')
    area.innerHTML='Voce Saiu!'
}
//media
function mediaAluno(nota1,nota2){
    var media = (nota1 + nota2) / 2;

    if(media >=7){
        console.log('Aluno Aprovado com  a média: ' + media)
    }else if(media < 7){
        console.log('Aluno Reprovado com a média: '+ media)
    }
}
//aluno com o curso
function aluno(aluno,curso){
    var mensagem = 'Seja bem vindo ' + aluno + ' ao curso de ' + curso;
    console.log(mensagem)
} */

    //                  WHILE  = enquanto

/* var x = 5;
while(x < 10){
    document.write('<br> O valor do X : ' + x);

    //Aumentar o valor do X (incrementar X)
    x++;
} */

//                  FOR = PARA

/* var valor = 30;

for(a=0;a<=valor;a++){
document.write('<br>Valor do A : ' + a);
}

 */

//                      SWITCH
function pedir(){
    var valor = prompt('Digite um valor Tiago || Joana')
   // console.log(typeof  Number(valor))

    switch(valor){
        case 'Tiago':
         alert('Ola Tiago');
            break;
        case 'Joana':
            alert('Ola Joana')
            break;
        default:
            alert('Algum NOME da lista')    
    }



  /*  switch(Number(valor)){
    case 1:
        alert('Voce escolheu o 1 : Sumo')
        break;
    case 2:
        alert('Voce escolheu o 2 : Agua Gelada')
        break;
    case 3:
        alert('Voce escolheu o 3 : Gelado');
            break;
    case 4:
        alert('Voce chamou o Empregado')
        break;
    default:
        alert('Escolha entre 1 e 4')
   } */

}