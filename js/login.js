const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = document.querySelector('[data-usuario]').value;
    const senha = document.querySelector('[data-senha]').value;

    if (usuario && senha === '1234') {
        alert('Login realizado com sucesso');
        window.location.href = '../index.html';
    } 
    else {
        alert('Seu usuário e/ou senha estão incorretos!');
    }
})