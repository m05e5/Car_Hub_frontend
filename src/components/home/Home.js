import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { models } from '../../redux/modelReducer';
import style from './model.module.css';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

import Carousel from 'react-material-ui-carousel';

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
        navButtonsProps={{ 
          style: {
              backgroundColor: "#6db126",
              opacity: 0.4
          }
      }} 
        >
          {stateModel.map((model, index, arr) => (
            
            <div className={style.cars} >
              <div className={style.car} >
                <img src={model.image} alt="model" className={style.car_img}  />
                <h3 className={style.car_name}>{model.name}</h3>
                <div className={style.divider}/>
                <p className={style.car_desc}>{ model.description }</p>
                <div className={style.medias}>
                  <div className={style.media_div}>
                    <Facebook className={style.media} />
                  </div>
                  <div className={style.media_div}>
                    <Twitter className={style.media} />
                  </div>
                  <div className={style.media_div}>
                    <Instagram className={style.media} />
                  </div>
                </div>
              </div>
              <div className={style.car} >
                <img src={arr[index+1] !== undefined ? arr[index+1].image : arr[1].image} alt="model" className={style.car_img}  />
                <h3 className={style.car_name}>{arr[index+1] !== undefined ? arr[index+1].name : arr[1].name}</h3>
                <div className={style.divider}/>
                <p className={style.car_desc}>{ arr[index+1] !== undefined ? arr[index+1].description : arr[1].description }</p>
                <div className={style.medias}>
                  <div className={style.media_div}>
                    <Facebook className={style.media} />
                  </div>
                  <div className={style.media_div}>
                    <Twitter className={style.media} />
                  </div>
                  <div className={style.media_div}>
                    <Instagram className={style.media} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
    </div>
  ) 
};

export default Home;
