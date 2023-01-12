import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectChannel, setMessages } from "../actions"

class ChannelList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel();
    this.props.setMessages(channel);
  }

  render() {
    return(
      <div className='channels'>
        <h1>Redux Chat</h1>
        <ul className="channel-list">
        {this.props.channels.map((channel, i) => <li
          key={i}
          className={channel === this.props.selectedChannel ? 'active' : null}
          onClick={() => this.handleClick(channel)}>
          <Link
            to={`/channels/${channel}`}>
            #{channel}
          </Link>
        </li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectChannel,
      setMessages },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
