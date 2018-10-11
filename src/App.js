// /** @format */

import React from 'react'
// import logo from '../assets/images/machine-learning-cheet-sheet.png'
import { hot } from 'react-hot-loader'
// import Header from './components/Header'
import Routes from './components/Routes'
import './App.css'

const App = () => (
  <div>
<h1>Webpack React Setup. sdsd</h1>
  <div className="my-app">
    {/* <Header /> */}
    <div className="App container">
      <Routes />111
    </div>
  </div>
  </div>
  
)
// export default App
export default hot(module)(App)
// import React from 'react'
// import { hot } from 'react-hot-loader'
// import './App.css'
// const App = () => <h1>Webpack React Setup. sdsd</h1>
// export default hot(module)(App)
