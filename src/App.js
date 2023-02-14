import React, { useState } from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import MessageInput from './MessageInput';
import './App.css';

function App() {
  
  const testChatLog = [
    { username: 'Roger', message: 'Are you going to the basketball game tonight?' },
    { username: 'David', message: 'Yes I am... what are you doing after the game?' },
    { username: 'Roger', message: 'Going home... what about you?' },
    { username: 'David', message: "I'm going to Denny's - you want to go too?" },
    { username: 'Roger', message: 'Sounds good -- see you there' }
  ];
  
  const [username, setUsername] = useState('Roger');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState(testChatLog);
  
  const onChange = (evt) => setMessageInput(evt.target.value);

  const onSubmit = function(evt) {
    evt.preventDefault();
    console.log('Submitted!');
  }

  return (
    <div className="chat-container">
      <Username username={username} />
      <ChatLog chatLog={chatLog} username={username} />
      <MessageInput messageInput={messageInput} onChange={onChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
