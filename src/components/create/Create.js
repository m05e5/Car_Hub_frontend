import React, { useEffect } from 'react';

const Create = () => {
  const navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');

    createLink.classList.add('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.remove('selected_nav');
  };

  useEffect(() => {
    navToggle();
  }, []);

  return (

    <div className="container">
      <p>Create</p>
    </div>
  );
};

export default Create;
