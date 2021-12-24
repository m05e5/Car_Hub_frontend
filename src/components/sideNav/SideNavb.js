import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Facebook, Twitter, Instagram, Whatsapp,
} from 'react-bootstrap-icons';
import logo from '../img/image.png';

const SideNavb = () => (
  <div className="sideNav">
    <div className="logo_div">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <ul className="nav_ul">
        <li className="nav_li" id="login_link">
          <NavLink className="nav_link" to="/login">Login</NavLink>
        </li>
        <li className="nav_li" id="signup_link">
          <NavLink className="nav_link" to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
    <div />
    <div />
  </div>
);

export default SideNavb;
