document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value
    let cpf = document.getElementById("cpf").value
    let idade = document.getElementById("idade").value
    let cidade = document.getElementById("cidade").value
    let moradia = document.getElementById("moradia").value;
    let quintal = document. querySelector(' input [ name="quintal" ] : checked' );
    let antes = document. querySelector(' input [ name="antes" ] : checked' );
    let 



    if (nome.length < 3) return alert("Nome Inválido");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome" +
        nome;


});