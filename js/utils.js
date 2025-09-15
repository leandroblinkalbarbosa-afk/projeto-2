export default class UI {
    constructor(listaId, mensagemId) {
        this.lista = document.getElementById(listaId);
        this.mensagem = document.getElementById(mensagemId);
    }

    criarItem(usuario) {
        const li = document.createElement('li');
        li.textContent = `Nome: ${usuario.nome} - Email: ${usuario.email}`;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.dataset.id = usuario._id;
        btnRemover.classList.add('btn-remover');

        li.appendChild(btnRemover);
        return li;
    }

    renderizarLista(usuarios) {
        this.lista.innerHTML = '';
        usuarios.forEach(usuario => {
            const item = this.criarItem(usuario);
            this.lista.appendChild(item);
        });
    }

    mostrarMensagem(texto) {
        this.mensagem.textContent = texto;
        setTimeout(() => this.mensagem.textContent = '', 3000);
    }

    validarFormulario(nome, email) {
        if (!nome.trim() || !email.trim()) {
            this.mostrarMensagem('Por favor, preencha nome e email.');
            return false;
        }

        return true;
    }
}