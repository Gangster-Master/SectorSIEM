import {request} from "../../core/interceptors/axios.interceptor";
import {AuthMethods} from "./Methods";

class ApiService {

    static Login = (user: string, password: string): any => {
        return request.post(AuthMethods.login, {user, password});
    }

    static GetMe = (token: string) => {
        return request.post(AuthMethods.checkAuthentication, {sessionid: token});
    }
}

export default ApiService;
