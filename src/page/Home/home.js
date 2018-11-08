import React from "react";
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
