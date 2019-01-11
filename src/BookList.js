import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBookAct } from './index';
import PropTypes from 'prop-types';

const List = ({items, remove}) => (
  items.map( (item) => (
  <tr key={item.name.toString()}>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td className="action">
      <MaterialIcon icon="delete" 
                    color='#000000' 
                    onClick={() => remove(item.name)}/>
    </td>
    <td className="action">
      <Link to={`/info/${item.name}`}><MaterialIcon icon="edit" color='#000000' /></Link>
    </td>
  </tr>
  ))
);

class BookList extends Component {

  render() {
    return (
    <div>
     <table className="storeTable">
	    <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
	      <List items={this.props.books} remove={this.props.bookListDeleteBook}/>
	    </tbody>
     </table> 
    </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
      books: state.books
    }
}

const mapDispatchToProps = dispatch => ({
  bookListDeleteBook: (name) => {
      dispatch( deleteBookAct(name) ) 
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList));