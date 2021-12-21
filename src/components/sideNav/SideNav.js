import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/image.png';

const SideNav = () => (
  <div className="sideNav">
    <div className="logo_div">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <ul className="nav_ul">
        <li className="nav_li" id="logout_link">
          <Link className="nav_link " to="/logout">Logout</Link>
        </li>
        <li className="nav_li" id="home_link">
          <Link className="nav_link " to="/">Models</Link>
        </li>
        <li className="nav_li" id="create_link">
          <Link className="nav_link" to="/create">Create</Link>
        </li>
        <li className="nav_li" id="reserve_link">
          <Link className="nav_link" to="/reserve_list">My Reservations</Link>
        </li>
      </ul>
    </nav>
    <div />
    <div />
  </div>
);

export default SideNav;
