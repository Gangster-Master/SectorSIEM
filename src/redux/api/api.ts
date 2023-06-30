import {request} from "./../../core/interceptors/axios.interceptor";

class Api {
    static post = (method: string, config: any): any => {
        return request.post(method, config);
    }
}

export default Api;
