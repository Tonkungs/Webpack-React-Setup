import React from 'react'
import { hot } from 'react-hot-loader'
import Routes from './components/Routes'

const App = () => (
  <React.Fragment>
      <Routes />
  </React.Fragment>
  
)
// export default App
export default hot(module)(App)
