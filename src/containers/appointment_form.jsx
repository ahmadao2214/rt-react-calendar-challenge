import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateEvents, deleteEvent } from '../actions/index';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      events: this.props.events,
      slotInfo: '',
      date: today.getMonth() + 1 + "/" + today.getDate(),
      title: 'New Event'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      events: nextProps.events
    });
    if(!nextProps.slotInfo){
      
    }
    else {
      const selectedDate = nextProps.slotInfo.start.getMonth() + 1 + "/" + nextProps.slotInfo.start.getDate();
      let event = nextProps.events.find( (event) => {
          return (
            nextProps.slotInfo.start.getMonth() === event.start.getMonth() &&
            nextProps.slotInfo.start.getDate() === event.start.getDate()
          );
      });
      if(event) {
        this.setState({
          slotInfo: nextProps.slotInfo,
          date: selectedDate,
          title: event.title
        });
      }
      else {
        this.setState({
          slotInfo: nextProps.slotInfo,
          date: selectedDate,
          title: "Slot Selected"
        });
      }
    }
  }

 handleSubmit(event, dispatch, props) {
     event.preventDefault();
     this.props.updateEvents(props);
 }

 handleChange(event) {
   this.setState({
     title: event.target.value
    });
 }

handleDelete(event, dispatch, props){
  this.props.deleteEvent(props);
}


  render(){
    return(
      <div>
        <form
          onSubmit={(event, dispatch) => {
            this.handleSubmit(event, dispatch, this.state)
          }}
          className='form-inline'
          >
          <div>{this.state.date}</div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <button
          onClick={(event, dispatch) => {
            this.handleDelete(event, dispatch, this.state)
          }}
          className='btn btn-danger'>
            Delete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
     events: state.events,
     slotInfo: state.slotInfo
   };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateEvents, deleteEvent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm);
