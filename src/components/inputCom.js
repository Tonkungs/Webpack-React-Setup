import React, {Component} from 'react';

class Exsam extends Component {
    constructor(props){
        super(props)
        this.props = props;
    }
    
    render({children}){
        return(
            <React.Fragment>
                 {children}
            </React.Fragment>
        )
    }
}
export default Exsam