import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CustomToas = ({ close_toast }) => {
    return (
        <div>
            something
            <button onClick={close_toast}>close</button>
        </div>
    )
}

const ReactToastify = () => {

    const showToast = () => {
        toast('toastify 1');
        toast(<CustomToas />);
    }

    return (
        <div>
            <button onClick={showToast}>react-toastify</button>
            <ToastContainer />
        </div>
    );
}

export default ReactToastify;
