/*eslint-disable*/
import React, { useEffect } from 'react';
import { goBack, sessionDestroy } from '../../Session';

const Logout = () => {

  const navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');
    const logoutLink = document.querySelector('#logout_link');

    logoutLink.classList.add('selected_nav');
    createLink.classList.remove('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.remove('selected_nav');
  };

  useEffect(() => {
    navToggle();
    sessionDestroy()
  }, []);


 {
    return (
      <div className="container_">
      <h1>Loading...</h1>
      </div>
    )
  }
}
export default Logout;
