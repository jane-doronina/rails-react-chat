export const SET_MESSAGES = "SET_MESSAGES"
export const CREATE_MESSAGE = "POST_MESSAGE"
export const SELECT_CHANNEL = "SELECT_CHANNEL"
const BASE_URL = '/api/v1';

export const setMessages = (channel) => {
  const promise = fetch(`${BASE_URL}/channels/${channel}/messages`, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  }
}

export const createMessage = (channel, content) => {
  const url = `${BASE_URL}/channels/${channel}/messages`
  const body = { content: content };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }
}

export const selectChannel = () => {
  return {
    type: SELECT_CHANNEL
  }
}

export const appendMessage = (message) => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  }
}
