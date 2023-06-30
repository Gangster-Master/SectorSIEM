import {all} from 'redux-saga/effects';
import auth from "../../auth/Sagas";
import api from "../../api/saga";

export default function* sagas() {
    yield all([
        auth(),
        api(),
    ]);
}
