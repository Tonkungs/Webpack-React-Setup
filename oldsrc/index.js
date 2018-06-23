import React from 'react';
import ReactDOM from 'react-dom';
import MyInput from './my-input'
// import Hello from "./hello";
import './styles.css';
const App = () => (
    <div>
        Hi, It's App, 
        <input/>
        <MyInput/>
    </div>
)
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
