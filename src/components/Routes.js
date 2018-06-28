import React from 'react'
import {Route, Switch } from "react-router-dom";

const Home = () => (
    <span>
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Primary bold title
              <i className="fab fa-font-awesome" />
            </h1>
            <h2 className="subtitle">Primary bold subtitle</h2>
          </div>
        </div>
      </section>
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a className="is-active">Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">Bulma</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Components</a>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  Breadcrumb
                </a>
              </li>
            </ul>
          </nav>
          <div className="content">
          <h3 className="title is-3">Manage Your Team</h3>
            <table>
              <thead>
                <tr>
                  <th>One</th>
                  <th>Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three</td>
                  <td>Four</td>
                </tr>
                <tr>
                  <td>Five</td>
                  <td>Six</td>
                </tr>
                <tr>
                  <td>Seven</td>
                  <td>Eight</td>
                </tr>
                <tr>
                  <td>Nine</td>
                  <td>Ten</td>
                </tr>
                <tr>
                  <td>Eleven</td>
                  <td>Twelve</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </span>
  );
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