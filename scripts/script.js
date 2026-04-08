document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let antes = document.querySelector('input[name="antes"]:checked');
    let hora = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let responsabilidade = document.getElementById("responsabilidade").checked;

    if (nome.length < 3) return alert("Nome Inválido");
    if (email.includes('@')) return alert("email Inválido");
    if (telefone.length < 8) return alert ("telefone Inválido");
    if (cpf === "")return alert ("cpf Inválido");
    if (idade >= 18)return alert ("idade incorreta!")
    if (cidade === "") return alert ("Por favor, selecione uma cidade")
    if (moradia === "") return alert ("obrigatorio!")
    if (quintal === "") return alert ("Obrigatorio!")
    if (antes === "") return alert ("Obrigatorio!")
    if (hora < 0 || hrs > 23 || min < 0 || min > 59) return alert ("Retorna o valor numérico válido")
    if (motivo.trim().length < 10) return alert("O motivo deve ter pelo menos 10 caracteres.");
    if (!responsabilidade.checked) { alert('Você deve aceitar os termos e condições para continuar.')};






    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome" + nome;



});