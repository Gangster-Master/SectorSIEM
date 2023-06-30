import {createRoutine} from "redux-saga-routines";

const LOGIN = createRoutine("LOGIN");
const CHECK_AUTH = createRoutine("CHECK_AUTH");
const LOGOUT = createRoutine("LOGOUT");
const TOKEN = createRoutine("TOKEN");
export default {
    LOGIN,
    CHECK_AUTH,
    LOGOUT,
    TOKEN
}
