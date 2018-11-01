import React from "react";
// import { Control, Form, actions } from "react-redux-form";
// import { Control, Form ,Field } from "react-redux-form";
// import 'element-theme-default/lib/input.css';
// import { Button as ButtonEl ,Input as InputEl } from 'element-react';
// import MenuNav from "../../components/MenuNav";
// import BreadCrumb from "../../components/BreadCrumb";
// import { DatePicker,Button ,Table, Divider, Tag ,Input  } from 'antd';
// import { Formik } from 'formik';
// import ButtonExampleButton from './exsimi';
import MyEnhancedForm from './formen';

// import 'antd/dist/antd.css'; 
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // value: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { value } = e.currentTarget;
    // console.log(value);
    //   this.setState({
    //       counter: this.state.counter + 1
    //   })
    // กัน side effect เลยใช่ข้างล่างแทน
    // this.setState(prevState => ({
    //   value
    // }));
     this.setState(() => ({
      value
    }));
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
            {/* <MenuNav /> */}
          </div>
          <div className="column">
          <MyEnhancedForm />
          {/* <ButtonExampleButton /> */}
          
            {/* <BreadCrumb /> */}
            {/* <DatePicker />
            <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Table columns={columns} dataSource={data} />
    <Input placeholder="Basic usage" />
          <label htmlFor=".firstName">First name:</label>
          <Field
          name="favoriteColor"
          component={Input}
          
          model=".firstName" id=".firstName"/> */}
                {/* <Control.text type="text" className="input" model=".firstName" id=".firstName" /> */}
            kkkkkkkkkkkkkkkkkkkkkk
            <div className="content">
              {/* <h3 className="title is-3">Manage Your Team</h3>
              value = {value}
              <input
                className="input"
                onChange={this.handleClick}
                type="text"
                placeholder="Text input"
                value={value}
              /> */}
              {/* <Form model="myForms.user" 
              onSubmit={user => this.handleSubmit(user)}
              onUpdate={(form) => this.handleUpdate(form)}
              onChange={(values) => this.handleChange(values)}
              >
                <label htmlFor=".firstName">First name:</label>
                <Control.text type="text" className="input" model=".firstName" id=".firstName" />
                <label htmlFor=".lastName">Last name:</label>
                <Control.text className="input" model=".lastName" id=".lastName" />

                <button type="submit">Finish registration!</button>
              </Form> */}
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
