import React from 'react'
import {Route, Switch } from "react-router-dom";
import Home from './../page/Home/home'
  const About = () => <h1>About</h1>;
  const Post = () => <h1>Post</h1>;
  const Project = () => <h1>Project</h1>;
  const NotFoundPage = () => <h1>NotFoundPage</h1>;

class Header extends React.Component {
    render() {
        return (
            <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/posts" component={Post} />
        <Route component={NotFoundPage} />
      </Switch>
)
}
}

export default Header