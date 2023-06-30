import axios from "axios";
import {get, isEmpty} from "lodash";
import conf from "../utils/config";
import {RequestInterface} from "../interfaces/request.interface";
import {ToastService} from "../services/toast.service";
import {ResponseInterface} from "../interfaces/response.interface";
import {CookieService} from "../services/cookie.service";
import {AuthMethods} from "../../redux/auth/Methods";

const toast = new ToastService();
const cookie = new CookieService();
const noneAuthMethods: string[] = [
    AuthMethods.login,
    AuthMethods.checkAuthentication,
];

const req = axios.create({
    baseURL: conf.API_ROOT,
    params: {},
});

req.interceptors.request.use((config) => {
    const token = cookie.getCookie('token');
    if (!noneAuthMethods.includes(get(config, 'data.method'))) {
        config = {
            ...config,
            data: {
                ...get(config, 'data', {}),
                auth: token,
            }
        }
    }

    return config;
}, (error) => {
    console.log(error)
});

req.interceptors.response.use((response) => {
    const error = get(response, 'data.error');
    if (!isEmpty(error)) {
        toast.error(get(error, 'message'), get(error, 'data'))
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});

const createBody = (method: string, params: {}): RequestInterface => {
    return {
        jsonrpc: "2.0",
        method,
        params,
        auth: null,
        id: 1,
    }
}

const request = {
    post: (method: string, params = {}, options = {}): Promise<ResponseInterface> => {
        const body = createBody(method, params);
        return new Promise((resolve, reject) => {
            req.post('', body, options).then(res => {
                const error = get(res, 'data.error');
                const result = get(res, 'data.result');
                if (!isEmpty(error)) {
                    reject(error);
                } else  {
                    resolve(result)
                }
            });
        })
    }
}

export {request};
