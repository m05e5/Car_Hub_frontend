const GET_MODELS = 'model/GET_MODELS';
const SELECT_MODEL = 'model/SELECT_MODEL';

const initialState = [];
/* eslint-disable */
export const models = (payload) => ({
  type: GET_MODELS,
  payload,
});

export const selectModel = (id) => ({
  type: SELECT_MODEL,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODELS:
      return action.payload;
    case SELECT_MODEL:
      const model = state.filter((selected_car) => selected_car.id === action.id);
      return model;
    default:
      return state;
  }
};

export default reducer;
