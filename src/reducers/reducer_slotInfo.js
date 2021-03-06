import { PERSIST_SELECTION } from '../actions'

export default function(state = null, action) {
  switch(action.type) {
    case PERSIST_SELECTION:
      return action.payload;
  }

  return state;
}
