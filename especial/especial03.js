/*
Desenvolva uma função que receba, como parâmetro, 
um Array com valores numéricos. Inicialmente ela deve 
imprimir todos os valores do Array. Logo após deve-se
multiplicar cada valor do array por 2, e em seguida 
imprimir os novos valores. Por fim, a função deve 
retornar um novo Array formados pelos números multiplicados.
Caso o Array informado, inicialmente, tenha tamanho 0, 
informar que é obrigatório informar um array com valores
numéricos válidos. (3 pontos)
*/

var lista = [1,6,7,3,44,999,6789]
function multiplicar(n){

    if (n.length == 0){

        console.log("digite pelo menos um número")
    }else{

        var guardar = n.map(function(item){return item*2})
        console.log(lista)
        console.log("todos os valores serão multiplicados por 2  !")
        console.log(guardar)
    
    }

 



}

var teste = multiplicar(lista);