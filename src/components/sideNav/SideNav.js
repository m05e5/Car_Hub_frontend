import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Facebook, Twitter, Instagram, Whatsapp,
} from 'react-bootstrap-icons';
import logo from '../img/image.png';

const SideNav = () => (
  <div className="sideNav">
    <div className="logo_div">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <ul className="nav_ul">
        <li className="nav_li" id="logout_link">
          <NavLink className="nav_link " to="/logout">Logout</NavLink>
        </li>
        <li className="nav_li" id="home_link">
          <NavLink className="nav_link " to="/">Models</NavLink>
        </li>
        <li className="nav_li" id="create_link">
          <NavLink className="nav_link" to="/create">Create</NavLink>
        </li>
        <li className="nav_li" id="reserve_link">
          <NavLink className="nav_link" to="/reserve_list">My Reservations</NavLink>
        </li>
        <li className="nav_li" id="delete_link">
          <NavLink className="nav_link" to="/delete_car">Delete Car</NavLink>
        </li>
      </ul>
    </nav>
    <div />
    <div className="sideNavMedia">
      <div className="b_car_medias">
        <div className="b_car_media_div">
          <Facebook className="b_car_media" />
        </div>
        <div className="b_car_media_div">
          <Twitter className="b_car_media" />
        </div>
        <div className="b_car_media_div">
          <Instagram className="b_car_media" />
        </div>
        <div className="b_car_media_div">
          <Whatsapp className="b_car_media" />
        </div>
      </div>
    </div>
  </div>
);

export default SideNav;
