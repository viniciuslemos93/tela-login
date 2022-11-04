<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../estilo/estilo.css">
</head>
<body>
    <section class="container">
        <h1>Cadastro de Novo Usuário</h1>
 
        <form action="../scripts/login.php" method="post">
            Nome: <input type="text" placeholder="Nome completo" name="nome"> <br>
            Telefone: <input type="text" placeholder="Telefone" name="telefone"> <br>
            E-mail: <input type="text" placeholder="E-mail" name="email"> <br>
            Senha: <input type="password" placeholder="Senha" name="senha"> <br>
            Confirmar Senha: <input type="password" placeholder="Confirmar senha" name="confirmar-senha"> <br>
            <input type="submit" value="Cadastrar" class="btn-cadastrar">
            <a href="../../index.html">Voltar</a>
        </form>        
        
    </section>
</body>
</html>