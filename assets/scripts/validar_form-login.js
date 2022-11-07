function validar_form_login() {
    var login = form_login.login.value;
    var senha = form_login.senha.value;
    
    if (login === "") {
        alert("O campo {Login} é obrigatório!");
        form_login.login.focus();
        return false;
    }
    if (senha === "") {
        alert("O campo {Senha} é obrigatório!");
        form_login.senha.focus();
        return false;
    }
}