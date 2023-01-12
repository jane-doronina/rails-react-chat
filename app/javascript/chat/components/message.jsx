import React from "react";
import { emojify } from 'react-emojione';

function strToRGB(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

const Message = (props) => {
  const color = strToRGB(props.message.author);
  return(
    <div className="message">
      <p className="author"><span style={{ color: color }}>{props.message.author}</span> <span className="created_at">- {props.message.created_at}</span></p>
      <p className="content">{props.message.content}</p>
    </div>
  )

}

export default Message;
