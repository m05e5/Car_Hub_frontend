import React from 'react';
import { Link } from 'react-router-dom'

const SideNav = () => (
  <div className='sideNav'>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/reserve">Reserve</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
