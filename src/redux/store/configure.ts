import {configureStore} from "@reduxjs/toolkit";
import {routerMiddleware} from "connected-react-router";
import {rootReducer} from "./reducers";
import {createBrowserHistory} from "history";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default (preloadedState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV === 'development',
        middleware: (getDefaultMiddleware: () => any[]) =>
            getDefaultMiddleware().concat(routerMiddleware(history), sagaMiddleware),
        preloadedState,
    });
    sagaMiddleware.run(sagas);
    return store;
};
