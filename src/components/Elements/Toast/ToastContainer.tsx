import React from "react";
import {get} from "lodash";

const ToastContainer = ({type = 'basic', title = '',  message = ''}) => {
    return <div className='text-white'>
        <h5 className="text-white mb-1">{title}</h5>
        <p className="text-white tx-14 mb-0 ">{message}</p>
    </div>
}
export default ToastContainer;
