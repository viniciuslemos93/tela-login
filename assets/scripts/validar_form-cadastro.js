var senha = form_cadastro.senha.value;
var confirmar_senha = form_cadastro.confirmar_senha.value;
function validar_form_cadastro () {
    //Variáveis para receber todos os valores do formulário
    var nome = form_cadastro.nome.value;    
    var email = form_cadastro.email.value;
    
    
    if (nome === "") {
        alert("O campo {Nome} é obrigatório!");
        form_cadastro.nome.focus();
        return false;
    }
    if (email === "") {
        alert("O campo {E-mail} é obrigatório!");
        form_cadastro.email.focus();
        return false;
    }
    if (senha === "") {
        alert("O campo {Senha} é obrigatório!");
        form_cadastro.senha.focus();
        return false;
    }
    if (confirmar_senha === "") {
        alert("O campo {Confirmar senha} é obrigatório!");
        form_cadastro.confirmar_senha.focus();
        return false;
    }

}
//Função para validar se as senhas conferem nos dois campos.
function confere_senha () {    

    if (confirmar_senha === senha) {        
        confirmar_senha.setCustomValidity('');
    } else {
        confirmar_senha.setCustomValidity('As senhas não conferem');        
    }
}