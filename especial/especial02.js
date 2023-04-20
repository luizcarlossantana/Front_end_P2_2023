/*
Desenvolva uma função que receba uma quantidade 
variáveis de valores numéricos como parâmetros e 
imprima cada número passado multiplicado por 2. 
Caso não seja informado nenhum número, emitir mensagem
informando que é obrigatório informar pelo menos um 
valor. (3 pontos)


*/



function multiplicar(n1,n2,n3){

    if (n1||n2||n3 == true){
      

        console.log(n1*2,n2*2,n3*2)
      
    }
    else{

        console.log("É obrigatório digitar pelo menos um número !!!")
    }

}

var teste = multiplicar(0,0,1);