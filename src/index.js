import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from './store.js';
const AppWithRouter = () => (
  <Provider store={ store }>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
