import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.scss";
import Router from "./router";
import './i18n';
import Store from './redux/store'
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.Fragment>
        <ToastContainer />
        <Store>
            <Router/>
        </Store>
    </React.Fragment>
);

reportWebVitals();
