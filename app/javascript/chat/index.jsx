import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import messagesReducer from './reducers/messagesReducer.js';

const chatContainer = document.getElementById('chat_app');
const channels = JSON.parse(chatContainer.dataset.channels).map(c => c.name);

const initialState = {
  messages: [],
  channels: channels
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

const root = createRoot(chatContainer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/channels/:channel" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
