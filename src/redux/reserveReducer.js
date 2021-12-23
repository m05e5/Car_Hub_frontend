const GET_RESERVATIONS = 'model/GET_RESERVATIONS';

const initialState = [];
export const reservations = (payload) => ({
  type: GET_RESERVATIONS,
  payload,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
