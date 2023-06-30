import Actions from "./Actions";
import {get} from "lodash";

export default function AuthReducer(state = {}, action: any) {
    switch (action.type) {
        case Actions.TOKEN.SUCCESS:
            return {
                ...state,
                token: get(action, "payload.token", null)
            }
        case Actions.TOKEN.FAILURE:
            return {
                ...state,
                token: null,
            }
        case Actions.CHECK_AUTH.TRIGGER:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isFetched: false,
                token: null,
            }
        case Actions.CHECK_AUTH.REQUEST:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isFetched: false,
                token: null,
            }
        case Actions.CHECK_AUTH.FAILURE:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isFetched: true,
                token: null,
            }
        case Actions.CHECK_AUTH.SUCCESS:
            return {
                ...state,
                ...get(action, "payload"),
                isAuthenticated: true,
                isFetched: true,
            }
        default:
            return state
    }
}
