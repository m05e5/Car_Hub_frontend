import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { models } from '../../redux/modelReducer';
import { oneCar } from '../../redux/oneCarReducer';
import style from './model.module.css';

import Car from './Car';

const modelsUrl = ' https://carhubackend.herokuapp.com/models';

const Home = () => {
  let stateModel = [];
  stateModel = useSelector((state) => state.myModels);
  const dispatch = useDispatch();

  const navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');

    createLink.classList.remove('selected_nav');
    homeLink.classList.add('selected_nav');
    reserveLink.classList.remove('selected_nav');
  };

  const getModels = () => {
    fetch(modelsUrl).then((data) => {
      data.json().then((dataJson) => dispatch(models(dataJson)));
    });
  };

  const selectCar = (id) => {
    fetch(`${modelsUrl}/${id}`).then((data) => {
      data.json().then((dataJson) => dispatch(oneCar(dataJson)));
    });
  };

  useEffect(() => {
    dispatch(oneCar([]));
    navToggle();
    getModels();
  }, []);

  return (
    <div className="container">
      <Carousel
        className={style.car_carousel}
        navButtonsAlwaysVisible
        swipe
        animation="fade"
        indicators={false}
        navButtonsProps={{
          style: {
            backgroundColor: '#6db126',
            opacity: 0.4,
          },
        }}
      >
        {stateModel.map((model, index, arr) => (

          <div className={style.cars} key={model.id}>
            <NavLink to="/car" className={style.car_link} onClick={() => selectCar(model.id)}>
              <Car car={model} />
            </NavLink>
            <NavLink to="/car" className={style.car_link} onClick={() => selectCar(arr[index + 1] !== undefined ? arr[index + 1].id : arr[0].id)}>
              <Car car={arr[index + 1] !== undefined ? arr[index + 1] : arr[0]} />
            </NavLink>
            <NavLink to="/car" className={style.car_link} onClick={() => selectCar(arr[index + 2] !== undefined ? arr[index + 2].id : arr[1].id)}>
              <Car car={arr[index + 2] !== undefined ? arr[index + 2] : arr[1]} />
            </NavLink>
          </div>
        ))}
      </Carousel>
      <Carousel
        className={style.mobile_carousel}
        navButtonsAlwaysVisible
        swipe
        animation="fade"
        indicators={false}
        navButtonsProps={{
          style: {
            backgroundColor: '#6db126',
            opacity: 0.4,
          },
        }}
      >
        {stateModel.map((model) => (

          <div className={style.cars} key={model.id}>
            <NavLink to="/car" className={style.mobile_car_link} onClick={() => selectCar(model.id)}>
              <Car car={model} />
            </NavLink>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
