import React from "react";
// import { Control, Form, actions } from "react-redux-form";
import { Control, Form ,Field } from "react-redux-form";
// import 'element-theme-default/lib/input.css';
// import { Button as ButtonEl ,Input as InputEl } from 'element-react';
// import MenuNav from "../../components/MenuNav";
// import BreadCrumb from "../../components/BreadCrumb";
import { DatePicker,Button ,Table, Divider, Tag ,Input  } from 'antd';
// import 'antd/dist/antd.css'; 
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
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

  handleSubmit(user) {
    // e.preventDefault();
    console.log(user);
  }

  handleChange(values) {
    console.log('handleChange',values)
  }

  handleUpdate(form) {
    console.log('handleUpdate',form)
  }


  render() {
    const {value }= this.state;
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="/">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="/">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="/">Delete</a>
        </span>
      ),
    }];
    
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }];
    
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
            {/* <BreadCrumb /> */}
            <DatePicker />
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
          
          model=".firstName" id=".firstName"/>
                {/* <Control.text type="text" className="input" model=".firstName" id=".firstName" /> */}
            kkkkkkkkkkkkkkkkkkkkkk
            <div className="content">
              <h3 className="title is-3">Manage Your Team</h3>
              value = {value}
              <input
                className="input"
                onChange={this.handleClick}
                type="text"
                placeholder="Text input"
                value={value}
              />
              <Form model="myForms.user" 
              onSubmit={user => this.handleSubmit(user)}
              onUpdate={(form) => this.handleUpdate(form)}
              onChange={(values) => this.handleChange(values)}
              >
                <label htmlFor=".firstName">First name:</label>
                <Control.text type="text" className="input" model=".firstName" id=".firstName" />
                <label htmlFor=".lastName">Last name:</label>
                <Control.text className="input" model=".lastName" id=".lastName" />

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
