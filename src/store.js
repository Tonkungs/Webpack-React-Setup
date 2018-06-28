import { createStore, applyMiddleware,combineReducers } from 'redux';
import { combineForms, createForms  } from 'react-redux-form';
import {composeWithDevTools , devToolsEnhancer  } from 'redux-devtools-extension';
// เอาไว้ดีเลย์
import thunk from 'redux-thunk';
// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));
const logger = store => next => action => {
    // console.group(action.type)
    // console.log('current state', store.getState())
    // console.log('dispatching', action)
    const result = next(action)
    // console.log('next state', store.getState())
    // console.groupEnd(action.type)
    return result
  }
  
  const middlewares = [thunk, logger]

  const initialUserState = {
    firstName: '',
    lastName: ''
  };
  
  // If you want your entire store to have the form state...
//   const store = createStore(combineForms({
//     user: initialUserState,
//   }));
  
  // Or you have an existing store and want the form state to
  // exist alongside the existing state...
  const store = createStore(combineReducers({
    // existing: existingReducer,
    // foo: fooReducer,
    // bar: barReducer,
  
    // ... use createForms, which will create:
    // the model reducer at "user"
    // the forms reducer at "forms" (e.g., "forms.user")
    ...createForms({
      user: initialUserState,
    }),
  }), composeWithDevTools(
    applyMiddleware(...middlewares),
  )
);

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