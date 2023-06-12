import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header>
      <nav>
        <ul className={s.Nav_list}>
          <li className={s.Nav_item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={s.Nav_item}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
