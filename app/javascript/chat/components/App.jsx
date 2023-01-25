import React from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../../assets/images/le_wagon_logo.png'
import MessageList from '../containers/message-list.jsx';
import ChannelList from '../containers/channel-list.jsx';

function App(props) {
  const { channel } = useParams();

  return (
    <div className="app">
      <div className='logo-div'><img src={logo} alt="react logo" /></div>
      <ChannelList selectedChannel={channel} />
      <MessageList selectedChannel={channel} current_user={props.current_user} />
    </div>
  );
}

export default App;
