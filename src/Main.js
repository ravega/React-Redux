import React, {Component} from 'react';
import Navigation from './Navigation';
import { connect } from 'react-redux';

class Main extends Component {
    
    render(){
        console.log('State: ', this.props.score);
        return(
            <div>
                <Navigation/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    score: state
  };
}

export default connect(mapStateToProps)(Main);