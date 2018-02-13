export function persistSelection(slotInfo) {
  return {
    type:'PERSIST_SELECTION',
    payload: slotInfo
  };
}

export function updateEvents(eventInfo) {
  return {
    type:'UPDATE_EVENTS',
    payload: eventInfo
  };
}

export function deleteEvent(eventInfo) {
  return {
    type:'DELETE_EVENT',
    payload: eventInfo
  };
}
