import {all, call, put, takeLatest} from "redux-saga/effects";
import {get, isEmpty} from "lodash";
import Actions from "./Actions";
import ApiService from "./ApiService";
import {CookieService} from "../../core/services/cookie.service";

const cookie = new CookieService();

function* checkAuthRequest(action: any) {
    let {token = null} = action.payload;
    try {
        if (!token) {
            token = cookie.getCookie('token');
        }

        if (token) {
            const user = cookie.getCookie('user');
            let data: object = {};
            if (!user) {
                data = yield call(ApiService.GetMe, token);
            }
            cookie.setCookie('user', JSON.stringify(data || user), 1);
            yield put({type: Actions.CHECK_AUTH.SUCCESS, payload: {user: data || user, token}});
        }
    } catch (e) {
        yield put({type: Actions.CHECK_AUTH.FAILURE});
    }
}

function* loginRequest(action: any) {
    const {payload: {user, password}} = action;

    try {
        const result: string = yield call(ApiService.Login, user, password);
        if (!isEmpty(result)) {
            yield put({type: Actions.TOKEN.SUCCESS, payload: {token: result}});
            yield put({type: Actions.LOGIN.SUCCESS, payload: {token: result}});
        }
    } catch (error) {
        yield put({type: Actions.LOGIN.FAILURE});
    }
}

function* loginSuccess(action: any) {
    if (!isEmpty(get(action, 'payload.token'))) {
        cookie.setCookie("token", action.payload.token, 1000);
    }
}

function* loginFailure() {
    cookie.deleteCookie("token");
}

function* logoutAuth() {
    yield put({type: Actions.LOGIN.FAILURE});
    yield put({type: Actions.CHECK_AUTH.REQUEST, payload: {token: null}});
}


export default function* sagas() {
    yield all([
        takeLatest(Actions.CHECK_AUTH.REQUEST, checkAuthRequest),
        takeLatest(Actions.LOGIN.REQUEST, loginRequest),
        takeLatest(Actions.LOGIN.SUCCESS, loginSuccess),
        takeLatest(Actions.LOGIN.FAILURE, loginFailure),
        takeLatest(Actions.LOGOUT.REQUEST, logoutAuth),
    ]);
}
