export const CRIAR_USUARIO_REQUEST = 'CRIAR_USUARIO_REQUEST';
export const CRIAR_USUARIO_SUCCESS = 'CRIAR_USUARIO_SUCCESS';
export const CRIAR_USUARIO_FAILURE = 'CRIAR_USUARIO_FAILURE';

export const criarUsuarioRequest = (email, password) => ({
    type: CRIAR_USUARIO_REQUEST,
    payload: {name, email, password}
});

export const criarUsuariosuccess = (usuario) => ({
    type: CRIAR_USUARIO_SUCCESS,
    payload: { usuario }
});

export const criarUsuarioRequestFailure = (error) => ({
    type: CRIAR_USUARIO_FAILURE,
    payload: { error }
})