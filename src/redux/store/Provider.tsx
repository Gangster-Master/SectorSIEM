import {Provider} from 'react-redux';
import store from './configure';

export default ({children}: any) => {
    return <Provider store={store()}>{children}</Provider>;
};
