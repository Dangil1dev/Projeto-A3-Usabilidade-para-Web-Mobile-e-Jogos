document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
    const mensagemErro = document.getElementById('mensagemErro');

    form.addEventListener('submit', function(event) {
        mensagemErro.textContent = '';  // Limpa a mensagem de erro

        const email = emailInput.value;

        if (!email.includes('@')) {
            event.preventDefault();  // Impede o envio do formulário
            mensagemErro.textContent = 'Por favor, insira um e-mail válido contendo "@"';
            mensagemErro.style.color = 'red';
        }
    });
});