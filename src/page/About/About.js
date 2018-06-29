import React from "react";
import { Control, Form, actions } from "react-redux-form";
import MenuNav from "./../../components/MenuNav";
import BreadCrumb from "./../../components/BreadCrumb";
import { connect } from "react-redux";
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumb />
        <h2>About</h2>
        <a className="button" onClick={() => this.props.click()}>
          เพิ่มค่า
        </a>
        <a className="button" onClick={() => this.props.clickSub()}>
          ลบค่า
        </a>
        {this.props.foo.count} || {this.props.foo.clicked}
        <input className="input" type="text" placeholder="Text input" />
      </React.Fragment>
    );
  }
}
const mapStatetoProps = state => {
  return {
    foo: state.foo
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    click: clicked => {
      dispatch({
        type: "ADD",
        payload: 1
      });
    },
    clickSub: () => {
      dispatch({
        type: "SUBTRACT",
        payload: 1
      });
    }
  };
};
// export default About;
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(About);
