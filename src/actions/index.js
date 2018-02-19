export const PERSIST_SELECTION = "PERSIST_SELECTION";
export const UPDATE_EVENTS = "UPDATE_EVENTS";
export const DELETE_EVENT = "DELETE_EVENT";

export function persistSelection(slotInfo) {
  return {
    type: PERSIST_SELECTION,
    payload: slotInfo
  };
}

export function updateEvents(eventInfo) {
  return {
    type: UPDATE_EVENTS,
    payload: eventInfo
  };
}

export function deleteEvent(eventInfo) {
  return {
    type: DELETE_EVENT,
    payload: eventInfo
  };
}
