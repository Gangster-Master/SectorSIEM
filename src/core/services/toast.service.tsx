import {Slide, toast} from "react-toastify";
import ToastContainer from "../../components/Elements/Toast/ToastContainer";

export class ToastService {
    error(title = 'Error', message = 'Oops! An Error Occurred') {
        return toast.error(<ToastContainer type='basic' message={message} title={title}/>,
            {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: false,
                transition: Slide,
                theme: "colored",
            }
        );
    }

    success(title = 'Success', message = '') {
        return toast.success(<ToastContainer type='basic' message={message} title={title}/>,
            {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: false,
                transition: Slide,
                theme: "colored",
            }
        );
    }

    warning(title = 'Warning', message = '') {
        return toast.warning(<ToastContainer type='basic' message={message} title={title}/>,
            {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: false,
                transition: Slide,
                theme: "colored",
            }
        );
    }

    info(title = 'Info', message = '') {
        return toast.info(<ToastContainer type='basic' message={message} title={title}/>,
            {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: false,
                transition: Slide,
                theme: "colored",
            }
        );
    }
}
