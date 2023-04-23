
/* 1) Crie um objeto que represente uma pessoa com as seguintes propriedades: nome, idade, profissão e endereço (logradouro, bairro, cidade e cep).

2) Desenvolva uma função que receba o objeto criado no item 1 e imprima os valores das propriedades (utilizando o console.log()).

3) Adicione ao objeto criado no item 1 uma nova propriedade chamada "telefone" e associe um valor de número de telefone qualquer.

4) Adicione ao objeto criado no item 1 uma função chamada obterDados() que deve retornar uma String com os nomes e valores das propriedades concatenados.

5) Adicione ao objeto criado no item 1 uma função que compara o objeto atual com um objeto passado como parâmetro, e deve retorna True caso o nome e idade das pessoas sejam iguais, caso contrário deve retornar False;

6) Criei um novo objeto que represente uma nova pessoa com a mesma estrutura do objeto criado no item 1.

7) Imprima o resulta da comparação do objeto criado no item 1 com o objeto criado no item 7.*/


//------------------------------------------------------------------------------------------------------------------
// Questão 01


var pessoa01 = {
  nome: "luiz",
  idade: 20,
  profissão: "desenvolvedor",
  endereço: { logradouro: "rua tal", cidade: "rio de janeiro", bairro: "botafogo", cep: "58943-99" }
};

//------------------------------------------------------------------------------------------------------------------


// Questão 02

function mostrar(p) {
  
  for (b in p) {

    console.log(p[b])
    

  }




}

mostrar(pessoa01)

// ---------------------------------------------------------------------------------------------------------------




// Questão 03
var telefone =  99999999

pessoa01.telefone = telefone

console.log(pessoa01)
//------------------------------------------------------------------------------------------------------------------

// Questão 04

function obterDados(){
  return toString(pessoa01)
}

//------------------------------------------------------------------------------------------------------------------
// Questão 05

var pessoa02 = {
  nome: "maria",
  idade: 89,
  profissão: "agricultora",
  endereço: { logradouro: "rua tal", cidade: "rio de janeiro", bairro: "botafogo", cep: "58943-99" }
}

//------------------------------------------------------------------------------------------------------------------
// Questão 06

function comparar (p1,p2){

  if (p1 === p2){

    return(true)

  }
  else  {
    return(false)
  }
}

comparar(pessoa01,pessoa02);

//------------------------------------------------------------------------------------------------------------------
// Questão 07

function diferença(c1,c2){

  var diferença = {};

  for(f in c1){
    if(c1[f]!== c2[f]){
      diferença = c2[f];
      console.log(diferença)
    }

  }

}

diferença(pessoa01,pessoa02);











