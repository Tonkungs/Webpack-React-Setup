import React from "react";
import { Route, Switch ,Link} from "react-router-dom";
import Loadable from "react-loadable";
// import Home from "./../page/Home/home";
// import About from "./../page/About/About";
const Post = () => <h1>Post</h1>;
const Project = () => <h1>Project</h1>;
const Child = ({match}) => <h1>Child {console.log(match)}</h1>;
const NotFoundPage = () => <h1>NotFoundPage</h1>;
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Home.page"*/ "./../page/Home/home"),
  loading: () => null
});

const About = Loadable({
  loader: () =>
    import(/* webpackChunkName: "About.page"*/ "./../page/About/About"),
  loading: () => null
});
class Header extends React.Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    // if (
    //   nextProps.history.action !== "POP" &&
    //   (!location.state || !location.state.modal)
    // ) {
    //   this.previousLocation = this.props.location;
    // }
  }

  render() {
    // const { location } = this.props;
    // const isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location
    // ); // not initial render
    return (
      <div>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/posts" component={Post} />
          <Route path="/child/:id" component={Child} />
          <Route path="/topic/:id" component={Topics} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* {isModal ? <Route path="/child/:id" component={Child} /> : null} */}
      </div>
    );
  }
}

export default Header;
