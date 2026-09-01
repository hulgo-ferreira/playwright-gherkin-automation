export class UsersClient {
    constructor(request) {
        this.request = request;
    }

    async listarUsuarios() {
        return await this.request.get('/users');
    }

    async buscarUsuario(id) {
        return await this.request.get(`/users/${id}`);
    }

    async criarUsuario(usuario) {
        return await this.request.post('/users', {
            data: usuario
        });
    }
}
