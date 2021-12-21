/* eslint-disable */
const GET_CAR = 'car/GET_CAR';
const initialState = [];
export const oneCar = (payload) => ({
  type: GET_CAR,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
