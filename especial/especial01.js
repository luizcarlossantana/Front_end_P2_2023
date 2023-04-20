/* 
Desenvolva uma função que receba um número qualquer, 
maior ou igual a zero, 
e imprima se ele é par ou impar. 
Caso o número seja menor 
que zero, a função deve informar
que é obrigatório informar um número maior 
ou igual a zero. (2 pontos)


*/


function ParImp(n){

    if (n<0){
        console.log("É obrigatório informar um número maior ou igual a zero !!!")

    }else{

        if(n%2 == 0){
            console.log(n + " é um número PAR")
        }else{

            console.log(n + " é um número IMPAR")
        }

    }

}



var teste = ParImp(-2);