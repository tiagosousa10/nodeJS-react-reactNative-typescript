/* */
var peso;
var altura;
var resultado;
var imc;

function calcular(event){
    event.preventDefault()

    peso=document.getElementById('peso').value ;
    altura= document.getElementById('altura').value;

    imc = peso/(altura * altura) 

    console.log("peso : " + peso + ' altura : ' +altura + ' IMC: ' + imc)

    resultado = document.getElementById('resultado')

    if(imc < 17) {
        resultado.innerHTML= '<br/> Seu resultado IMC foi de : ' + imc.toFixed(2) + '<br/> muitoABAIXO DO PESO'
    } else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML= '<br/> Seu resultado IMC foi de : ' + imc.toFixed(2) + '<br/> ABAIXO DO PESO'
    } else if(imc >=18.5 && imc < 24.99){
        resultado.innerHTML= '<br/> Seu resultado IMC foi de : ' + imc.toFixed(2) + '<br/> PESO IDEAL'
    }else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML= '<br/> Seu resultado IMC foi de : ' + imc.toFixed(2) + '<br/> ACIMA DO PESO'
    }else if(imc >= 30){
        resultado.innerHTML= '<br/> Seu resultado IMC foi de : ' + imc.toFixed(2) + ' OBESIDADE'
    }
//          resetar valores apos submit
    document.getElementById('peso').value=''; 
    document.getElementById('altura').value='';

}