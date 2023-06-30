import {combineReducers} from 'redux';
import auth from "../../auth/Reducers";
import api from "../../api/reducer";

export const rootReducer = combineReducers({
    auth,
    api,
});
