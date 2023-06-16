import { CRIAR_USUARIO_FAILURE, CRIAR_USUARIO_REQUEST, CRIAR_USUARIO_SUCCESS } from './actions';

const initialState = {
    loading: false,
    usuario: null,
    error: null
}

const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case CRIAR_USUARIO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CRIAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                usuario: action.payload.usuario,
                error: null
            };
        case CRIAR_USUARIO_FAILURE:
            return {
                loading: false,
                usuario: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default authReducer;