import React from "react";
import { Control, Form, actions } from "react-redux-form";
import MenuNav from "./../../components/MenuNav";
import BreadCrumb from "./../../components/BreadCrumb";
import { Button as ButtonEl, Input as InputEl } from "element-react";

// import 'element-theme-default';
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let { value } = e.currentTarget;
    console.log(value);
    //   this.setState({
    //       counter: this.state.counter + 1
    //   })
    // กัน side effect เลยใช่ข้างล่างแทน
    this.setState(prevState => ({
      value: value
    }));
  }
  handleSubmit(user) {
    console.log(user);
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  handleChange(values) {
    console.log("handleChange", values);
  }
  handleUpdate(form) {
    console.log("handleUpdate", form);
  }
  handleSubmit(values) {
    console.log("handleSubmit", values);
  }
  render() {
    return (
      <span>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                หน้าแรกใหญ่ไหม
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
            <ButtonEl type="primary">Hello</ButtonEl>
            <InputEl placeholder="Please input" />
            kkkkkkkkkkkkkkkkkkkkkk
            <div className="content">
              <h3 className="title is-3">Manage Your Team</h3>
              value = {this.state.value}
              <input
                className="input"
                onChange={this.handleClick}
                type="text"
                placeholder="Text input"
                value={this.state.value}
              />
              <Form
                model="myForms.user"
                onSubmit={user => this.handleSubmit(user)}
                onUpdate={form => this.handleUpdate(form)}
                onChange={values => this.handleChange(values)}
              >
                <label htmlFor=".firstName">First name:</label>
                <Control.text
                  className="input"
                  model=".firstName"
                  id=".firstName"
                />

                <label htmlFor=".lastName">Last name:</label>
                <Control.text
                  className="input"
                  model=".lastName"
                  id=".lastName"
                />

                <button type="submit">Finish registration!</button>
              </Form>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default Home;
// export default connect(
//   state => ({
//     sandwiches: state.sandwiches
//   })
// )(Home);
