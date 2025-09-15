export default class UsuarioService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async obterUsuarios() {
        const response = await fetch(this.apiUrl);
        if (!response.ok) throw new Error('Erro ao carregar usuários');
        return await response.json();
    }

    async adicionarUsuario(dados) {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        if (!response.ok) throw new Error('Erro ao salvar dados');
        return await response.json();
    }

    async removerUsuario(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Erro ao remover usuário');
    }
}