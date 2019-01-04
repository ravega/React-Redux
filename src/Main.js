import React, {Component} from 'react';
import Menu from './Menu';
import BookList from './BookList';
import './bookstore.css';

class Main extends Component {
    
    render(){
        return(
            <div>
                <div className="container">
                  <Menu/>
                  <BookList/>
                </div>
            </div>
        );
    }
}

export default Main;