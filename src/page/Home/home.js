import React from "react";
// import { Formik } from 'formik';
// import ButtonExampleButton from './exsimi';
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';
import moment from 'moment';
import MyEnhancedForm from './formen';

moment.locale('th');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
      dateTime: '',
      datesRange: ''
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event, {name, value}) => {
    if (name) {
      this.setState({ [name]: value });
    }
  }

  // handleClick(e) {
    // const { value } = e.currentTarget;
    // console.log(value);
    //   this.setState({
    //       counter: this.state.counter + 1
    //   })
    // กัน side effect เลยใช่ข้างล่างแทน
    // this.setState(prevState => ({
    //   value
    // }));
    //  this.setState(() => ({
    //   value
    // }));
  // }


  render() {
    const {date, time, dateTime,  datesRange} = this.state;
    return (
      <span>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                หน้าแรกใหญ่ไหม ลอง
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
        <DateInput
          name="date"
          placeholder="Date"
          value={date}
          iconPosition="left"
          onChange={this.handleChange} />
        <TimeInput
          name="time"
          placeholder="Time"
          value={time}
          iconPosition="left"
          onChange={this.handleChange} />
        <DateTimeInput
          name="dateTime"
          placeholder="Date Time"
          value={dateTime}
          iconPosition="left"
          onChange={this.handleChange} />
        <DatesRangeInput
          name="datesRange"
          placeholder="From - To"
          value={datesRange}
          iconPosition="left"
          onChange={this.handleChange} />
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
