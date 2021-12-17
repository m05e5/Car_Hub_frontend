import React, { useEffect } from 'react';
/* eslint-disable */
const Reserve = () => {
  const navToggle = () => {
    const home_link = document.querySelector('#home_link');
    const create_link = document.querySelector('#create_link');
    const reserve_link = document.querySelector('#reserve_link');

    create_link.classList.remove('selected_nav');
    home_link.classList.remove('selected_nav');
    reserve_link.classList.add('selected_nav');
  };

  useEffect(() => {
    navToggle();
  }, []);

  return (
    <div className="container">
      <p>Reserve</p>
    </div>
  );
};

export default Reserve;
