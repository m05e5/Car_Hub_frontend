import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import './car_detail.css';

const CarDetail = () => {
  const state = useSelector((state) => state.myModels);
  useEffect(() => {
    console.log(state);
  }, []);

  return (

    <div className="container">
      <div className="detail_view">
        <img src={state[0].image} className="detail_image" alt="car" />
        <div className="car_details">
          <h2>{state[0].name}</h2>
          <div className="car_fee dark">
            <p>Finance fee</p>
            <p>
              {' '}
              {state[0].price}
              {' '}
              $
            </p>
          </div>
          <div className="car_fee">
            <p>Option to purchase fee</p>
            <p>
              {' '}
              {state[0].fee}
              {' '}
              $
            </p>
          </div>
          <div className="car_fee dark">
            <p>Total amount payable</p>
            <p>
              {' '}
              {state[0].total_price}
              {' '}
              $
            </p>
          </div>
          <div className="car_fee">
            <p>Duration</p>
            <p> 3 Months </p>
          </div>
          <button type="button" className="rent_link" id="modal-displayer">
            Rent Car
            <CaretRight size={20} />
          </button>
        </div>
      </div>
      <NavLink to="/">
        <div className="back_link">
          <CaretLeft size={20} />
        </div>
      </NavLink>
    </div>
  );
};

export default CarDetail;
