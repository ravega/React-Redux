import React, { Component } from 'react';
import Info from './Info';
import Main from './Main';
import Navigation from './Navigation';
import {Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Route exact path="/info/:name" component={Info}/>
        <Route exact path="/" component={Main}/>
      </div>  
    );
  }
}

export default App;
