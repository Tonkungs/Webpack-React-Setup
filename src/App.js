import React from "react";
// import logo from '../assets/images/machine-learning-cheet-sheet.png'
import { hot } from "react-hot-loader";
import Header from './components/Header'
import Routes from './components/Routes'


const App = () => (
  <div className="my-app">
    <Header>
      test
    </Header>
    <div className="App container">
      <Routes/>
    </div>
  </div>
);
// export default App
export default hot(module)(App);
