import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import './car_detail.css';
import ReserveModal from '../reserve/Reserve_modal';

const CarDetail = () => {
  const state = useSelector((state) => state.myCar);
  useEffect(() => {
    console.log(state);
  }, []);
  const reserveModalDisplay = () => {
    const modal = document.querySelector('.reserve_modal-background');
    const opener = document.querySelector('#reserve_modal-displayer');
    const closer = document.querySelector('.X_reserve');

    function closeModal() {
      modal.style.visibility = 'hidden';
    }

    function callp() {
      modal.style.visibility = 'visible';
    }
    opener.onclick = callp;
    closer.onclick = closeModal;
  };

  return (
    <div>
      <ReserveModal />
      <div className="container_">
        <div className="detail_view">
          <img src={state.image} className="detail_image" alt="car" />
          <div className="car_details">
            <h2>{state.name}</h2>
            <div className="car_fee dark">
              <p>Finance fee</p>
              <p>
                {' '}
                {state.price}
                {' '}
                $
              </p>
            </div>
            <div className="car_fee">
              <p>Option to purchase fee</p>
              <p>
                {' '}
                {state.fee}
                {' '}
                $
              </p>
            </div>
            <div className="car_fee dark">
              <p>Total amount payable</p>
              <p>
                {' '}
                {state.total_price}
                {' '}
                $
              </p>
            </div>
            <div className="car_fee">
              <p>Duration</p>
              <p> 3 Months </p>
            </div>
            <button type="button" className="rent_link" onClick={reserveModalDisplay} id="reserve_modal-displayer">
              Reserve Car
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
    </div>
  );
};

export default CarDetail;
