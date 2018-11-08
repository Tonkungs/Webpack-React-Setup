import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Route, Switch ,Link} from "react-router-dom";
import Loadable from "react-loadable";
import { Container} from 'semantic-ui-react';
import HeaderCom from './HeaderCom';
import FooterCom from './FooterCom';
import MenuNav from './MenuNav';
// import PropTypes from 'prop-types'; 
const Post = () => <h1>Post</h1>;
const Project = () => <h1>Project</h1>;
const Child = () =>  <h1>Child </h1>;
const NotFoundPage = () => <h1>NotFoundPage</h1>;
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );
// Topics.PropTypes = {
//   match: React.PropTypes.string
// };
const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Home.page" */ "./../page/Home/home"),
  loading: () => null
});

const About = Loadable({
  loader: () =>
    import(/* webpackChunkName: "About.page" */ "./../page/About/About"),
  loading: () => null
});
const Dashboard = Loadable({
  loader: () =>
    import(/* webpackChunkName: "About.page" */ "./../page/Dasnboard/Dashboard"),
  loading: () => null
});
const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: "About.page" */ "./../page/Login/Login"),
  loading: () => null
});
// class Routes extends React.Component {
//   // previousLocation = this.props.location;
//   render() {
//     const props = this.props;
//     return (
//       <div>
        // <Switch >
        //   <Route exact path="/" component={Home} />
        //   <Route exact path="/about" component={About} />
        //   <Route exact path="/projects" component={Project} />
        //   <Route exact path="/posts" component={Post} />
        //   <Route path="/child/:id" component={Child} />
        //   <Route path="/topic/:id" component={Topics} />
        //   <Route component={NotFoundPage} />
        // </Switch>
//       </div>
//     );
//   }
// }
// Routes.propTypes = {
//   departureDate: React.PropTypes.string,
//   isReturning: React.PropTypes.bool  
// };
// export default Routes

const Routes = () => 
  <div>
   <style>{`
    body {
        background-color:#f1f1f1;
    }

    `}</style>
  <HeaderCom />
  {/* style={{ margin: '5em 0em 0em', padding: '5em 0em' }} */}
  <Container style={{ 
    backgroundColor: '#FFFFFF',
    margin: '7em 0em 3em 0em',
     padding: '5em 3em' 
}} >   
<MenuNav />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="/child/:id" component={Child} />
          
          {/* <Route path="/topic/:id" component={Topics} /> */}
          <Route component={NotFoundPage} />
      </Switch>
  </Container> 
  <FooterCom />
  </div>
 

export default Routes