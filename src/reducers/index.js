import { combineReducers } from 'redux';
import events from './reducer_events';
import slotInfo from './reducer_slotInfo';

const rootReducer = combineReducers({
    events,
    slotInfo,
});

export default rootReducer;
