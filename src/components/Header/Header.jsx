import { NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import logo from '../../images/camper.png';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation();

  return (
    <header className={css.header}>
      <NavLink to="/" className={css.link}>
        <img src={logo} alt="logo" height={50} width={50}/>
      </NavLink>
      <div className={css.nav}>
        <NavLink to="/campers" className={clsx(css.link, location.pathname.includes('campers') && css.active)}>
          Campers
        </NavLink>
        <NavLink to="/favorite" className={clsx(css.link, location.pathname.includes('favorite') && css.active)}>
          Favorites
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
