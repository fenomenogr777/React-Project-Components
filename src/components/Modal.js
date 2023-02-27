import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, actionBar, onClose }) {
  // WHEN MODAL ON BODY OVERFLOW IS SET TO HIDDEN SO NO SCROLL HAPPENS
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="overlay"></div>
      <div className="modal">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
