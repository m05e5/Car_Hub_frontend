import React, { useEffect } from 'react';
import { isConnect, isConnectasync } from '../../Session';

const Reserve = () => {
  
  const navToggle = () => {
    const home_link = document.querySelector('#home_link');
    const create_link = document.querySelector('#create_link');
    const reserve_link = document.querySelector('#reserve_link');

    create_link.classList.remove('selected_nav');
    home_link.classList.remove('selected_nav');
    reserve_link.classList.add('selected_nav');
  }

  useEffect(() => {
    navToggle();
  }, []);

  let a = isConnect()
  console.log(a)

  return (
    <div className='container_'>
      <p></p>
    </div>
  )
};

export default Reserve;
