import React from 'react';
import UserInfo from "./UserInfo";
import FormatDate from "./FormatDate";

const Comment= (props)=> {
    return (  
        <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {FormatDate(props.date)}
        </div>
      </div>
    );
}

export default Comment;