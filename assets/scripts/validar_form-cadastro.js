function validar_form_cadastro() {
    var nome = form_cadastro.nome.value;    
    var email = form_cadastro.email.value;
    var senha = form_cadastro.senha.value;
    var confirmar_senha = form_cadastro.confirmar_senha.value;

    
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