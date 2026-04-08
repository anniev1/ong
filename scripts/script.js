document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let idade = Number(document.getElementById("idade").value.trim());
    let cidade = document.getElementById("cidade").value.trim();
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let antes = document.querySelector('input[name="antes"]:checked');
    let hora = Number(document.getElementById("horas").value.trim());
    let motivo = document.getElementById("motivo").value.trim();
    let responsabilidade = document.getElementById("responsabilidade").checked;

    
    if (nome.length < 3) return alert("Nome inválido. Mínimo 3 caracteres.");
    if (!email.includes("@")) return alert("Email inválido.");
    if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido. Informe pelo menos 8 dígitos.");
    if (cpf === "") return alert("CPF obrigatório.");
    if (isNaN(idade) || idade < 18) return alert("Idade inválida. Deve ser 18 anos ou mais.");
    if (cidade === "") return alert("Cidade obrigatória.");
    if (moradia === "") return alert("Selecione o tipo de moradia.");
    if (!quintal) return alert("Informe se possui quintal.");
    if (!antes) return alert("Informe se já teve pet antes.");
    if (isNaN(hora) || hora < 0) return alert("Informe um número de horas válido.");
    if (motivo.length < 10) return alert("O motivo deve ter pelo menos 10 caracteres.");
    if (/^quero$|^porque sim$/i.test(motivo)) return alert("Motivo da adoção não pode ser genérico.");
    if (!responsabilidade) return alert("Você deve aceitar o termo de responsabilidade.");
