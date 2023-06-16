import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../Services/api';
import { criarUsuarioRequest, criarUsuariosuccess,criarUsuarioRequestFailure, CRIAR_USUARIO_REQUEST} from './actions';

export function* signIn(action) {
    try {
        const response = yield call(() => api.post('/signIn', action.usuario));
        // console.log(response.data.token);
        yield put(criarUsuariosuccess(response.data));
    } catch (error) {
        yield put(criarUsuarioRequestFailure(error));
    }
}

export default all([
    takeLatest(CRIAR_USUARIO_REQUEST, signIn)
]);