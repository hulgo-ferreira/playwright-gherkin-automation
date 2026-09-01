export function validarUsuario(usuario) {
    return Boolean(
        usuario &&
        typeof usuario === 'object' &&
        typeof usuario.id !== 'undefined'
    );
}
