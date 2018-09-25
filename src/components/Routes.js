import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
// import Home from "./../page/Home/home";
// import About from "./../page/About/About";
const Post = () => <h1>Post</h1>;
const Project = () => <h1>Project</h1>;
const NotFoundPage = () => <h1>NotFoundPage</h1>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home.page"*/'./../page/Home/home'),
  loading: () => null
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "About.page"*/'./../page/About/About'),
  loading: () => null
});
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
    );
  }
}

export default Header;
