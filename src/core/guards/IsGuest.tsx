import {connect} from "react-redux";
import {DispatchInterface} from "../interfaces/dispatch.interface";
import Actions from "../../redux/auth/Actions";
import {useEffect} from "react";
import {get} from "lodash";
import {useNavigate} from "react-router-dom";

const IsGuest = ({isAuthenticated, checkAuthRequest, children}: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        checkAuthRequest();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated]);

    return <>
        {!isAuthenticated && children}
    </>
}

const mapState = (state: any) => {
    return {
        isAuthenticated: get(state, 'auth.isAuthenticated', false),
    }
}

const mapDispatch = (dispatch: (config: DispatchInterface) => {}) => {
    return {
        checkAuthRequest: (token = '') => dispatch({
            type: Actions.CHECK_AUTH.REQUEST,
            payload: {token}}
        ),
    }
}

const connector = connect(mapState, mapDispatch);
export default connector(IsGuest);
