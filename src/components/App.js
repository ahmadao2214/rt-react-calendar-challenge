import React, { Component } from 'react';
import '../style/App.css';
import BigCalendar from '../containers/calendar';
import AppointmentForm from '../containers/appointment_form';
import PrintDiv from './print_div';

class App extends Component {
  render() {
    return (
      <div>
        <BigCalendar />
        <AppointmentForm />
        <PrintDiv />
      </div>
    );
  }
}

export default App;
