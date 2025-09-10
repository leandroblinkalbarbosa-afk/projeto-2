import Classes from './classes.js';
import Utils from './utils.js';

import UsuarioService from './classes.js';

import UI from './utils.js'

const apiUrl = 'https://crudcrud.com/api/2b43c3e413c14e66b95b00acd011b95b/usuario';
const usuarioService = new UsuarioService(apiUrl);
const ui = new UI('listaDeUsuarios', 'paragrafo');

document.getElementById('btn').addEventListener('click', async () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (!ui.validarFormulario(nome, email)) return;

    try {
        const novoUsuario = await usuarioService.adicionarUsuario({ nome, email });
     
        const item = ui.criarItem(novoUsuario);
        ui.lista.appendChild(item);
        ui.mostrarMensagem('Usuário adicionado com sucesso!');
    } catch (error) {
        ui.mostrarMensagem(error.message);
    }
});

ui.lista.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-remover')) {
        const id = event.target.dataset.id;
        try {
            await usuarioService.removerUsuario(id);
            event.target.parentElement.remove();
            ui.mostrarMensagem('Usuário removido com sucesso!');
        } catch (error) {
            ui.mostrarMensagem(error.message);
        }
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const usuarios = await usuarioService.obterUsuarios();
        ui.renderizarLista(usuarios);
    } catch (error) {
        ui.mostrarMensagem(error.message);
    }
});