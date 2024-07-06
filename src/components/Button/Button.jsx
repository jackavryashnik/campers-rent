import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ type, children, style }) => {
  const btnClasses = clsx(css.btn, style === 'transparent' ? css.transparent : css.filled);

  return (
    <button className={btnClasses} type={type}>
      {children}
    </button>
  );
};

export default Button;
