import React, { useEffect } from 'react';
import PropTypes  from 'prop-types'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify({ message }) {
    const {id, status, messageText} = message;

    const notify = () => {
        toast[status](`${messageText}`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      };

  useEffect(() => {
    if (status && messageText) {
      notify();
    }
  },[id, status, messageText]);

  return (
    <>
      <ToastContainer />
    </>
  );
}

Toastify.propTypes = {};

export default Toastify;
