import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookAct } from './index';
import Clock from './Clock';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      bookPrice: 0
    };
  }

  updateInputName(evt) {
    this.setState({
      bookName: evt.target.value
    });
  }

  render() {
    return (
    <div className="Row">     
      <input value={this.state.bookName} onChange={evt => this.updateInputName(evt)}/>

      <input ref={ node => {this.price = node} }/>

      <button onClick={() => this.props.menuAddBook(this.state.bookName, this.price.value)}>Save book</button>

      <Clock/>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = dispatch => ({
  menuAddBook: (name, price) => {
      dispatch( addBookAct(name, price) ) 
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);