/* eslint-disable react/prop-types */
import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import style from './model.module.css';

const Car = ({ car }) => {
  const {
    // eslint-disable-next-line camelcase
    id, name, description, image, background_color,
  } = car;

  return (
    <div className={style.car} id={id}>
      <div className={style.img_div}>
        <div style={{
          backgroundColor: background_color,
          position: 'absolute',
          height: '80%',
          width: '80%',
          zIndex: '-1',
          borderRadius: '50%',
        }}
        />
        <img src={image} alt="model" className={style.car_img} />
      </div>
      <h3 className={style.car_name}>{name}</h3>
      <div className={style.divider} />
      <p className={style.car_desc}>{ description }</p>
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
  );
};

export default Car;
