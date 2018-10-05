import { combineReducers } from "redux";
import { REQUEST_IN, ADD_COUNT, SUBTRACT_COUNT } from "../actions/index";

const countState = {
  count: 0,
  clicked: 0,
  data: {
    data: []
  }
};
/* eslint no-param-reassign: "error" */
const fooReducers = (state = countState, action) => {
  // console.log("action.type", action.type);
  // console.log("action.payload", action.payload);
  switch (action.type) {
    case REQUEST_IN:
      state = {
        ...state,
        data: action.payload
      };
      
      break;
    case ADD_COUNT:
      state = {
        ...state,
        count: state.count + 1,
        clicked: state.clicked + 1
      };
      break;
    case SUBTRACT_COUNT:
      state = {
        ...state,
        count: state.count - 1,
        clicked: state.clicked + 1
      };
      break;
    default:
      return state;
  }

  return state;
};
const fooReducer = combineReducers({
  fooReducers
});

export default fooReducer;
