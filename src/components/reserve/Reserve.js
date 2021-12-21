import React, { useEffect } from 'react';

const Reserve = () => {
  const navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');

    createLink.classList.remove('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.add('selected_nav');
  };

  useEffect(() => {
    navToggle();
  }, []);

  return (
    <div className="container_">
      <p>Reserve</p>
    </div>
  );
};

export default Reserve;
