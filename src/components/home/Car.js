import React from 'react';
import style from './model.module.css';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const Car = ({ car }) => {
  const {
    id, name, description, image,
  } = car;

  return (
    <div className={style.car} id={id} >
      <img src={image} alt="model" className={style.car_img}  />
      <h3 className={style.car_name}>{name}</h3>
      <div className={style.divider}/>
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
  )
}

export default Car;