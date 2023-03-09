var lista_altura = [];
var lista_sexo = [];
var controle = 0;
var soma = 0;
var conta_m = 0;
var conta_f = 0;
var media = soma / conta_m;

var res = document.getElementById('res')


while (controle < 3) {

    var altura = window.prompt("Digite sua Altura");
    var sexo = window.prompt("Digite seu Sexo");

    controle++;


    lista_altura.push(parseFloat(altura));
    lista_sexo.push(sexo);

}


for (c of lista_altura) {
   
    var maior = lista_altura[0];
    var menor = lista_altura[0];


    if (c > maior) {

        maior = c;

    } else if (c < menor) {

        menor = c;

    }



}

for (d in lista_sexo) {



    if (lista_sexo[d] == "m") {

        conta_m++;

        soma += lista_altura[d];



    } else if (lista_sexo[d] == "f") {
        conta_f++;
    }
}


console.log(maior)
console.log(menor)
console.log(media)
console.log(conta_f)




