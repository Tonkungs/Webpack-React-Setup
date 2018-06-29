import { createStore, applyMiddleware, combineReducers } from "redux";
import { combineForms, createForms, actionTypes } from "react-redux-form";
import {
  composeWithDevTools,
  devToolsEnhancer
} from "redux-devtools-extension";
// เอาไว้ดีเลย์
import thunk from "redux-thunk";
// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));
const logger = store => next => action => {
  // console.group(action.type)
  // console.log('current state', store.getState())
  // console.log('dispatching', action)
  const result = next(action);
  // console.log('next state', store.getState())
  // console.groupEnd(action.type)
  return result;
};

const middlewares = [thunk, logger];

const initialUserState = {
  firstName: "",
  lastName: ""
};
const countState = {
  count: 0,
  clicked: 0
};
const fooReducer = (state = countState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        count: (state.count += action.payload),
        clicked: (state.clicked += 1)
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        count: (state.count -= action.payload),
        clicked: (state.clicked += 1)
      };
      break;
    // default:
    //   throw "เลือก fooReducer ไม่ถูกต้อง";
    //   break;
  }

  return state;
};
// If you want your entire store to have the form state...
//   const store = createStore(combineForms({
//     user: initialUserState,
//   }));

// Or you have an existing store and want the form state to
// exist alongside the existing state...
const store = createStore(
  combineReducers({
    // existing: existingReducer,
    foo: fooReducer,
    // bar: barReducer,

    // ... use createForms, which will create:
    // the model reducer at "user"
    // the forms reducer at "forms" (e.g., "forms.user")
    ...createForms({
      user: initialUserState
    })
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

// store.dispatch({
//   type: 'ADD',
//   payload: 1
// })
// devToolsEnhancer()
//   // Or you want to nest your form and model reducer under a specific key...
//   const store = createStore(combineReducers({
//     existing: existingReducer,
//     foo: fooReducer,
//     bar: barReducer,

//     // Make sure to specify the key as the second argument, so that RRF
//     // knows where the form and model reducers exist in the store!
//     myForms: combineForms({
//       user: initialUserState,
//     }, 'myForms'),
//   }));

export default store;
