import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservations } from '../../redux/reserveReducer';
import './reservation.css';

const ReserveList = () => {
  const reserveUrl = 'https://carhubackend.herokuapp.com/reserved';
  const navToggle = () => {
    const homeLink = document.querySelector('#home_link');
    const createLink = document.querySelector('#create_link');
    const reserveLink = document.querySelector('#reserve_link');

    createLink.classList.remove('selected_nav');
    homeLink.classList.remove('selected_nav');
    reserveLink.classList.add('selected_nav');
  };

  const reserveState = useSelector((state) => state.myReservations);
  const dispatch = useDispatch();
  const getreservations = () => {
    fetch(reserveUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQwMDc1MjU1LCJleHAiOjE2NDAwNzg4NTUsImp0aSI6IjUyYTU3ZGJiLTI0MmQtNGI0MC05OWMwLTAwZDZiMzI4MjhkZCJ9.D3sNG_MHuL2SUtzKk7mS0EyU7SAM-ZaEbDDsd8FeaZ4',
      },
    }).then((data) => {
      data.json().then((dataJson) => dispatch(reservations(dataJson)));
    });
  };
  useEffect(() => {
    getreservations();
    navToggle();
  }, []);

  return (
    <div className="container_">
      <div className="reservationPage">
        <h1>My Reservations</h1>
        <div className="reservationList">
          {reserveState.map((reserve) => (
            <div className="reservation" key={reserve.id}>
              <img src={reserve.image} alt="model" className="reservationImg" />
              <h3>{reserve.name}</h3>
              <p className="reservationDesc">{reserve.description}</p>
              <div className="reservationDetails">
                <p>
                  Date:
                  {reserve.date}
                </p>
                <p>
                  Total Price:
                  {reserve.total_price}
                  $
                </p>
                <p>
                  Country:
                  {reserve.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReserveList;
