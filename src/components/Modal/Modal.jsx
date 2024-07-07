import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('overlays')
  );
};

export default Modal;
