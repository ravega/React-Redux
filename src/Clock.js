import React, { Component } from 'react';
import './bookstore.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      date: this.formatTime(date.getHours(), date.getMinutes()),
    };
    this.tick = this.tick.bind(this);
  }

  formatTime(hours, minutes) {
    var formattedHours = ("0" + hours).slice(-2);
    var formattedMinutes = ("0" + minutes).slice(-2);
    return formattedHours + ":" + formattedMinutes;
  }

  tick() {
    fetch('http://worldclockapi.com/api/json/utc/now')
      .then((response) => {
        return response.json()
      })
      .then((time) => {
        var date = new Date(time.currentDateTime);
        this.setState({
          date : this.formatTime(date.getHours(), date.getMinutes())
        });
      })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 60000);
  }

  render() {
    return (    
      <span className="clock pull-right">{this.state.date}</span>
    );
  }
}

export default Clock;