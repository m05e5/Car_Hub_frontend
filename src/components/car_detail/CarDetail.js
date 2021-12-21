import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CarDetail = () => {
  const stateModel = useSelector((state) => state.myModels);
  useEffect(() => {
    console.log(stateModel);
  });

  return (

  <div className='container'>
    <p>CarDetail</p>
  </div>
)
};

export default CarDetail;
