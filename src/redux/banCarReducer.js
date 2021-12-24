const GET_LIST = 'model/GET_LIST';

const initialState = [];
export const banList = (payload) => ({
  type: GET_LIST,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
