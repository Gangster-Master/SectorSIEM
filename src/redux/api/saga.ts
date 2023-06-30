import {all, call, put, takeEvery} from "redux-saga/effects";
import Actions from "./actions";
import Api from "./api";
import {get} from "lodash";

function* getAll(action: any) {
    const {payload: {method, config, storeName, callback}} = action;

    try {
        // @ts-ignore
        const data = yield call(Api.post, method, config);
        try {
            yield call(callback, data);
        } catch (e) {
        }
        yield put({type: Actions.GET_ALL.SUCCESS, payload: {data, storeName}});
    } catch (e: any) {
        console.log(e);
        yield put({type: Actions.GET_ALL.FAILURE, payload: {storeName, errors: e}});
    }
}

function* getOne(action: any) {
    const {payload: {method, config, storeName, callback}} = action;
    try {
        // @ts-ignore
        const data = yield call(Api.post, method, config);
        try {
            yield call(callback, data);
        } catch (e) {
        }
        yield put({type: Actions.GET_ONE.SUCCESS, payload: {data, storeName}});
    } catch (e: any) {
        console.log(e);
        yield put({type: Actions.GET_ONE.FAILURE, payload: {storeName, errors: e}});
    }
}

function* postAll(action: any) {
    const {payload: {method, config, storeName, callback}} = action;

    try {
        // @ts-ignore
        const data = yield call(Api.post, method, config);
        try {
            yield call(callback, data);
        } catch (e) {
        }
        yield put({type: Actions.POST_ALL.SUCCESS, payload: {storeName, data}});
    } catch (e) {
        yield put({type: Actions.POST_ALL.FAILURE, payload: {storeName, errors: e}});
    }
}

export default function* sagas() {
    yield all([
        takeEvery(Actions.GET_ALL.REQUEST, getAll),
        takeEvery(Actions.GET_ONE.REQUEST, getOne),
        takeEvery(Actions.POST_ALL.REQUEST, postAll),
    ]);
}
