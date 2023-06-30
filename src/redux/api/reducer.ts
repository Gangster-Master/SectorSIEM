import {get} from 'lodash';
import Actions from "./actions";

export default function ApiReducer(state = {}, action: any) {
    switch (action.type) {
        case Actions.GET_ALL.REQUEST:
            return ((action, state) => {
                const { storeName } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: {
                            ...get(state, `data.${storeName}`, []),
                            isFetched: false,
                        },
                    },
                };
            })(action, state);
        case Actions.GET_ALL.SUCCESS:
            return ((action, state) => {
                const { data, storeName } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: { data, isFetched: true },
                    },
                };
            })(action, state);
        case Actions.GET_ALL.FAILURE:
            return (() => {
                const { storeName, errors } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: {
                            isFetched: true,
                            hasErrors: true,
                            errors,
                        },
                    },
                };
            })();
        case Actions.GET_ALL.TRIGGER:
            return (() => {
                const { storeName } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: {
                            isFetched: false,
                        },
                    },
                };
            })();
        case Actions.GET_ONE.REQUEST:
            return ((action, state) => {
                const { storeName } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: {
                            ...get(state, `data.${storeName}`, {}),
                            isFetched: false,
                        },
                    },
                };
            })(action, state);
        case Actions.GET_ONE.SUCCESS:
            return ((action, state) => {
                const { data, storeName } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: { data, isFetched: true },
                    },
                };
            })(action, state);
        case Actions.GET_ONE.FAILURE:
            return (() => {
                const { storeName, errors } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: {
                            isFetched: true,
                            hasErrors: true,
                            errors,
                        },
                    },
                };
            })();
        case Actions.GET_ONE.TRIGGER:
            return (() => {
                const { storeName } = action.payload;
                return {
                    ...state,
                    data: {
                        ...get(state, 'data', {}),
                        [storeName]: {
                            isFetched: false,
                        },
                    },
                };
            })();
        default:
            return state;
    }
}
