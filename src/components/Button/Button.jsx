import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ type, children, style, onClick }) => {
  const btnClasses = clsx(css.btn, style === 'transparent' ? css.transparent : css.filled);

  return (
    <button className={btnClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
