import update from 'immutability-helper';
import { UPDATE_EVENTS, DELETE_EVENT } from '../actions'


const initialState = [
  {
    title: 'Some Event',
    start: new Date(2018, 1, 28),
    end: new Date(2018, 1, 28)
  },
  {
    title: 'Interview',
    start: new Date(2018, 1, 19),
    end: new Date(2018, 1, 19)
  },
  {
    title: 'Birthday Party',
    start: new Date(2018, 1, 22),
    end: new Date(2018, 1, 22)
  },
  {
    title: 'Late Night Event',
    start: new Date(2018, 1, 24),
    end: new Date(2018, 1, 24)
  },
]

export default function(state = initialState, action) {
  let newArray = state.slice();
  let dateString, newDate, newEvent, findEvent;
  const current = new Date();

  switch(action.type) {
    case UPDATE_EVENTS:
      dateString = action.payload.date.split('/');
      newDate = new Date(2018, dateString[0] - 1, dateString[1]);
      newEvent = {
        title: action.payload.title,
        start: newDate,
        end: newDate
      };
      const sameDay = (newEvent.start.getMonth() == current.getMonth()) && (newEvent.start.getDate() == current.getDate());
      const futureDate = (newEvent.start.getTime() >= current.getTime());

      if (futureDate || sameDay){
        findEvent = state.find( (findEvent) => {
          return (
            newEvent.start.getMonth() == findEvent.start.getMonth() &&
            newEvent.start.getDate() == findEvent.start.getDate()
          );
        });
        if(findEvent) {
           const idx = state.indexOf(findEvent);
           newArray = update(state, {[idx]:{$set: newEvent}});
           return newArray;
         }
        else {
           newArray.splice(0, 0, newEvent);
           return newArray;
        }
     }
     return state;

    case DELETE_EVENT:
      dateString = action.payload.date.split('/');
      newDate = new Date(2018, dateString[0] - 1, dateString[1]);
      findEvent = state.find( (findEvent) => {
          return (
            newDate.getMonth() == findEvent.start.getMonth() &&
            newDate.getDate() == findEvent.start.getDate() &&
            action.payload.title == findEvent.title
          );
      });
      if(findEvent) {
        newArray.splice(state.indexOf(findEvent), 1);
        return newArray;
      }
      return state;
  }

  return state;
}
