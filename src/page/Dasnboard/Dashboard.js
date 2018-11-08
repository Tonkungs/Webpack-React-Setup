import React, { Component }  from 'react'
// import 'semantic-ui-css/semantic.min.css';
// import { Container} from 'semantic-ui-react';
// import inputCom from '../../components/inputCom';
import { Grid, Segment } from 'semantic-ui-react';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render(){
        return(
            <React.Fragment>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
                </p>     
                <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment inverted vertical>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
            </React.Fragment>
        )
    }
}
// Dashboard.defaultProps = {
//   color: 'blue'
// };
export default Dashboard
