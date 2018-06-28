import React from "react";
import MenuNav from './../../components/MenuNav'
import BreadCrumb from './../../components/BreadCrumb'

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    let { value } = e.currentTarget
    console.log(value);
    //   this.setState({
    //       counter: this.state.counter + 1
    //   })
    // กัน side effect เลยใช่ข้างล่างแทน
    this.setState(prevState => ({
      value: value
    }))
  }
  render() {
    return (
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
            <MenuNav />
          </div>
          <div className="column">
            <BreadCrumb />
            <div className="content">
              <h3 className="title is-3">Manage Your Team</h3>
              value = {this.state.value}
              <input className="input" onChange={this.handleClick} type="text" placeholder="Text input"
              value={this.state.value} />
              <a className="button is-primary">Primary</a>
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
    )
  }
}

export default Home