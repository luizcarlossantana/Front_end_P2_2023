function Enviar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("msg");
    var objeto = {};
    objeto.nome = nome.value;
    objeto.email = email.value;
    objeto.mensagem = mensagem.value;



   inserirMensagem(objeto);

}

function Entrar(){

    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    var obj2 = {};

    obj2.email = usuario.value;
    obj2.senha = senha.value;


   var resposta = validarUsuario(obj2);

   if (resposta == true){

    window.open("Tabela.html");
}
    else {
        window.alert("usuário ou senha incorretos");
    }

    
}

function Receber(){

    var obter = obterMensagens();

    var tabela = document.getElementById("tabela");

    for( b in obter){
        var linha = document.createElement("tr") ;

        var colunaNome = document.createElement("td") ;
        colunaNome.innerHTML = obter[b].nome;
        var colunaEmail = document.createElement("td") ;
        colunaEmail.innerHTML = obter[b].email;
        var colunaMenssagem = document.createElement("td") ;
        colunaMenssagem.innerHTML = obter[b].mensagem;


        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);
        linha.appendChild(colunaMenssagem);

        tabela.appendChild(linha);
        
    }



}



