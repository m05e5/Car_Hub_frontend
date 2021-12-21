import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/image.png';

const SideNavb = () => (
  <div className="sideNav">
    <div className="logo_div">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <ul className="nav_ul">
        <li className="nav_li selected_nav" id="login_link">
          <Link className="nav_link" to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    <div />
    <div />
  </div>
);

export default SideNavb;
