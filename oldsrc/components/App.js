import React from 'react'
import logo from '../assets/images/machine-learning-cheet-sheet.png'
import { hot } from 'react-hot-loader'
import Hello from './Hello'
import MyStatelessComponent from './MyStatelessComponent'
import HelloApp from './HelloApp'
import HelloAppProp from './HelloAppProp'
import './App.css'
import './App.scss'
const App = () => (
    <div>
        <img src={logo} />
        <h1>Webpack React Setup. fdsf</h1>
        <Hello />
        <MyStatelessComponent
            title="Stateless"
            message="Example of Stateless Component" />
        <HelloApp />
        <HelloAppProp message="This is message sent from Appddd" />
    </div>
)
// export default App
export default hot(module)(App)