function ChatLog(props) {
    return (
      <div className="chat-log">
        {
          props.chatLog.map((chat, idx) => {
            if (props.username === chat.username) {
                return (
                  <div className="chat-item chat-from-me" key={'chat'+idx}>
                    <h6>{chat.username}</h6>
                    <h4>{chat.message}</h4>
                  </div>
                )
              } else {
                return (
                  <div className="chat-item" key={'chat'+idx}>
                     <h6>{chat.username}</h6>
                     <h4>{chat.message}</h4>
                  </div>
                )
              }              
          })
        }
      </div> 
    );
  }
  
  export default ChatLog;
  
  