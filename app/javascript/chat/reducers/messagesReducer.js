import { SET_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from "../actions";

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE:
      if (state.map(message => message.id).includes(action.payload.id)) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case SELECT_CHANNEL:
      return []
    default:
      return state;
  }

}

export default messagesReducer;
