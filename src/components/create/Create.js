import React, { useEffect } from 'react';


const Create = () => {
  
  const navToggle = () => {
    const home_link = document.querySelector('#home_link');
    const create_link = document.querySelector('#create_link');
    const reserve_link = document.querySelector('#reserve_link');

    create_link.classList.add('selected_nav');
    home_link.classList.remove('selected_nav');
    reserve_link.classList.remove('selected_nav');
  }

  useEffect(() => {
    navToggle();
  }, []);

  return (

  <div className='container_'>
    <p>Create</p>
  </div>
)
};

export default Create;
