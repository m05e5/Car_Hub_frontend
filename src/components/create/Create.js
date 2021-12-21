import React, { useEffect } from 'react';
import { goBack } from '../../Session';

const Create = () => {
  const navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');
    const logoutLink = document.querySelector('#logout_link');

    logoutLink.classList.remove('selected_nav');
    createLink.classList.add('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.remove('selected_nav');
  };

  useEffect(() => {
    goBack();
    navToggle();
  }, []);

  return (

    <div className="container_">
      <p>Create</p>
    </div>
  );
};

export default Create;
