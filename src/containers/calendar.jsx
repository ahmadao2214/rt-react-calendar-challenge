import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { persistSelection } from '../actions/index';
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);


class Dnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      slotInfo: ''
    };
    this.selectSlot = this.selectSlot.bind(this);
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        events: nextProps.events
      });
  }

  selectSlot(slotInfo){
    this.setState({
      slotInfo: slotInfo,
    });
    this.props.persistSelection(slotInfo);
    let event = this.state.events.find( (event) => {
      return (
        this.state.slotInfo.start.getMonth() === event.start.getMonth() &&
        this.state.slotInfo.start.getDate() === event.start.getDate()
      );
    });
    if(event) {
      alert('Event already exists for that day');
    }
  }

  render() {
    return (
      <div>
          <BigCalendar
            selectable
            views={['month']}
            events={this.props.events}
            defaultDate={new Date(2018, 1, 12)}
            onSelectSlot={slotInfo => {this.selectSlot(slotInfo)}}
          />
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
     events: state.events,
     slotInfo: state.slotInfo,
     forValues: state.formValues
   };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ persistSelection: persistSelection }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dnd);
