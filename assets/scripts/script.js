const formulario = document.querySelector ("#login");

formulario.onsubmit = evento => {
    //Receber o valor co campo
    var nome = document.querySelector("#nome").value;

    console.log(nome);
    evento.preventDefault();
}