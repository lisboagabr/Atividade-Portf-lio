// Impede o envio automático do formulário
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
 // Captura os dados do usuário   
    let nome = document.querySelector("input[name='nome']").value;
    let email = document.querySelector("input[name='email']").value;
    let mensagem = document.querySelector("textarea[name='mensagem']").value;
// Validação dos campos e exibição de mensagens
    if (nome === "") {
        alert("Insira seu nome");
        return;
    }

    if (email === "") {
        alert("Insira seu e-mail");
        return;
    }

    if (mensagem === "") {
        alert("Insira sua mensagem");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Insira um e-mail válido");
        return;
    }

    alert("Enviado com sucesso!");
    document.getElementById("formContato").reset();

});

function alterarTema() {
    document.body.classList.toggle("dark");
}