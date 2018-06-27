import React from 'react'
// import logo from '../assets/images/machine-learning-cheet-sheet.png'
import { hot } from 'react-hot-loader'
import { Switch, Route, NavLink } from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>NotFoundPage</h1>

const App = () => (
    <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                        <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                        <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                        <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                        <a className="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </nav>
        <div className="App container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Project} />
                <Route exact path="/posts" component={Post} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </div>

)
// export default App
export default hot(module)(App)
