// src/components/Navigation.jsx
import { NavLink } from 'react-router-dom';
import './Navigation.module.css'; 

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
