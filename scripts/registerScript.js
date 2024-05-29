document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (senha !== confirmarSenha) {
        mensagemErro.textContent = 'As senhas não coincidem!';
        mensagemErro.style.color = 'red';
    } else {
        mensagemErro.textContent = 'Registrado com sucesso!';
        mensagemErro.style.color = 'green';
    }
});


/*VALIDANDO CPF*/

// Funcao para formatar o CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // remove todos os caracteres que nao sao dígitos
    cpf = cpf.substring(0, 11); // Limita o CPF a 11 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

// funcao para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // remove todos os caracteres que nao sao dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// evento de input no campo CPF para formatar e validar o CPF
document.getElementById('cpf').addEventListener('input', function() {
    let cpf = this.value;
    this.value = formatarCPF(cpf);
    cpf = cpf.replace(/[^\d]+/g, ''); // remove todos os caracteres que não são dígitos para validação
    if (validarCPF(cpf)) {
        document.getElementById('mensagemErro').textContent = '';
        document.getElementById('cpfValidIcon').style.display = 'inline';
    } else {
        document.getElementById('mensagemErro').textContent = 'CPF inválido';
        document.getElementById('mensagemErro').style.color = 'red';
        document.getElementById('cpfValidIcon').style.display = 'none';
    }
});

// Evento de submit no formulário para validar CPF e senhas
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');
    const cpf = document.getElementById('cpf').value.replace(/[^\d]+/g, ''); // remove os caracteres nao digitos
// valida se a senha e a mesma 
    if (!validarCPF(cpf)) {
        mensagemErro.textContent = 'CPF inválido';
        mensagemErro.style.color = 'red';
        document.getElementById('cpfValidIcon').style.display = 'none';
    } else if (senha !== confirmarSenha) {
        mensagemErro.textContent = 'As senhas não coincidem!';
        mensagemErro.style.color = 'red';
    } else {
        mensagemErro.textContent = 'Registrado com sucesso!';
        mensagemErro.style.color = 'green';
    }
});
