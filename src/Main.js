import React, {Component} from 'react';
import Navigation from './Navigation';

class Main extends Component {
    
    render(){
        console.log('State: ', this.props.dStore.getState());
        return(
            <div>
                <Navigation/>
            </div>
        );
    }
}

export default Main