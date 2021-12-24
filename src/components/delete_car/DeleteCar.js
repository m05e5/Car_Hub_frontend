import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import { banList } from '../../redux/banCarReducer';
import './delete_car.css';
import { goBack } from '../../Session';

const DeleteCar = () => {
  const state = useSelector((state) => state.myBan);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const navToggle = () => {
    goBack();
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');
    const logoutLink = document.querySelector('#logout_link');
    const deleteLink = document.querySelector('#delete_link');

    deleteLink.classList.add('selected_nav');
    logoutLink.classList.remove('selected_nav');
    createLink.classList.remove('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.remove('selected_nav');
  };

  const getList = () => {
    fetch('http://carhubackend.herokuapp.com/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then((data) => {
      data.json().then((dataJson) => dispatch(banList(dataJson)));
    });
  };

  const toggleBan = (id) => {
    const data = {
      car_id: id,
    };
    fetch('https://carhubackend.herokuapp.com/ban', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        getList();
      });
  };

  useEffect(() => {
    getList();
    navToggle();
  }, []);

  return (
    <div className="container_">
      {' '}

      <div className="carList">
        {state.map((item) => (
          <div className="b_car" key={item.id}>
            <img src={item.image} alt="model" className="b_car_img" />
            <h3 className="car_name">{item.name}</h3>
            <div className="b_car_divider" />
            <p className="b_car_desc">{ item.description }</p>
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
            </div>
            {item.banned
              ? <button type="button" className="delete_btn" onClick={() => toggleBan(item.id)}> Show car </button>
              : <button type="button" className="delete_btn hide" onClick={() => toggleBan(item.id)}> Hide car </button>}
          </div>
        )) }
      </div>
    </div>
  );
};

export default DeleteCar;
