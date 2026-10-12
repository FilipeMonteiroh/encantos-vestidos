// Variável com o nome da loja.
const nomeLoja = 'Encanto Vestidos';

// Função que altera o conteúdo já existente na página.
function mostrarMensagem() {
    const textoCabecalho = document.querySelector('header p');
    const botao = document.querySelector('form button');

    textoCabecalho.textContent = `Obrigada por visitar a ${nomeLoja}!`;
    botao.textContent = 'Mensagem exibida';
}

// Evento de clique no botão que já existe dentro do formulário.
document.querySelector('form button').addEventListener('click', mostrarMensagem);

// Validação simples do formulário existente.
document.querySelector('form').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensagem = document.querySelector('#mensagem').value.trim();

    let aviso = document.querySelector('#aviso-formulario');

    if (!aviso) {
        aviso = document.createElement('p');
        aviso.id = 'aviso-formulario';
        this.appendChild(aviso);
    }

    if (!nome || !email || !mensagem) {
        aviso.textContent = 'Preencha nome, e-mail e mensagem antes de enviar.';
        aviso.style.color = '#b42318';
        return;
    }

    aviso.textContent = `Obrigada, ${nome}! Sua mensagem foi validada com sucesso.`;
    aviso.style.color = '#18794e';
    this.reset();
});
