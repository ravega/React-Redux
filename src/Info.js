import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

class Info extends Component {

  render() {
    return (
    <div className="container">     
      <h1><MaterialIcon icon="import_contacts" color='#000000' size="24"/>&nbsp;
      {this.props.match.params.name} </h1>
      <hr></hr>
      
      <div className="Row">
        <textarea placeholder="Book review" cols="140" rows="15"></textarea>
      </div>
      <div className="Row">
        <button className="pull-right">Save</button>
      </div>
    </div>
    );
  }
}

Info.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      finame: PropTypes.string.isRequired
    })
  })
}

export default Info;