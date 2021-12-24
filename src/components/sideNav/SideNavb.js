import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/image.png';

const SideNavb = () => (
  <div className="sideNav">
    <div className="logo_div">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <ul className="nav_ul">
        <li className={window.location.pathname === '/login' ? 'nav_li selected_nav' : 'nav_li'} id="login_Navlink">
          <NavLink className="nav_Navlink" to="/login">Login</NavLink>
        </li>
        <li className={window.location.pathname === '/signup' ? 'nav_li selected_nav' : 'nav_li selected_nav'} id="signup_Navlink">
          <NavLink className="nav_Navlink" to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
    <div />
    <div />
  </div>
);

export default SideNavb;
