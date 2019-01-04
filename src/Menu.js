import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookAct } from './index';

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

  updateInputPrice(evt) {
    this.setState({
      bookPrice: evt.target.value
    });
  }

  render() {
    return (
    <div>     
      <input value={this.state.bookName} onChange={evt => this.updateInputName(evt)}></input>
      <input value={this.state.bookPrice} onChange={evt => this.updateInputPrice(evt)}></input>
      <button onClick={() => this.props.menuAddBook(this.state.bookName, this.state.bookPrice)}>Save book</button>
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