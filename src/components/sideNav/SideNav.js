import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/image.png';

const SideNav = () => {

  return (
    <div className='sideNav'>
      <div className='logo_div'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className='nav_ul'>
          <li className="nav_li" id='home_link'>
            <Link className="nav_link " to="/">Home</Link>
          </li>
          <li className="nav_li" id='create_link'>
            <Link className="nav_link" to="/create">Create</Link>
          </li>
          <li className="nav_li" id='reserve_link'>
            <Link className="nav_link" to="/reserve">Reserve</Link>
          </li>
        </ul>
      </nav>
      <div>
        
      </div>
      <div>
        
      </div>
    </div>
  )
};

export default SideNav;
