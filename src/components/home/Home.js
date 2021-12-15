import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { models } from '../../redux/modelReducer';
import style from './model.module.css';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

import Carousel from 'react-material-ui-carousel';
import Car from './Car';

const modelsUrl = ' https://carhubackend.herokuapp.com/models';

const Home = () => {
  const stateModel = useSelector((state) => state.myModels);
  const dispatch = useDispatch();

  const navToggle = () => {
    const home_link = document.querySelector('#home_link');
    const create_link = document.querySelector('#create_link');
    const reserve_link = document.querySelector('#reserve_link');

    create_link.classList.remove('selected_nav');
    home_link.classList.add('selected_nav');
    reserve_link.classList.remove('selected_nav');
  }

  const getModels = () => {
    if (!stateModel.length > 0) {
      fetch(modelsUrl).then((data) => {
        data.json().then((dataJson) => dispatch(models(dataJson)));
      });
    }
  };

  useEffect(() => {
    navToggle();
    getModels();
    console.log(stateModel);
  });

  return (
    <div className='container'>
        <Carousel
        className={style.car_carousel}
        navButtonsAlwaysVisible={true}
        swipe={true}
        animation={"fade"}
        indicators={false}
        navButtonsProps={{ 
          style: {
              backgroundColor: "#6db126",
              opacity: 0.4
          }
      }} 
        >
          {stateModel.map((model, index, arr) => (
            
            <div className={style.cars} >
              <Car car={ model } />
              <Car car={ arr[index+1] !== undefined ? arr[index+1] : arr[0] } />
              <Car car={ arr[index+2] !== undefined ? arr[index+2] : arr[1] } />
            </div>
          ))}
        </Carousel>
    </div>
  ) 
};

export default Home;
