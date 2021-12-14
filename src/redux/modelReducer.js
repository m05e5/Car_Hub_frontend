const GET_MODELS = 'model/GET_MODELS'


const initialState = [];

export const models = (payload) => ({
  type: GET_MODELS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODELS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;