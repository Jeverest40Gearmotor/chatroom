import React, {useState} from 'react';

function LoginPage(props) {

    const [username, setUsername] = useState('Roger');

    const onChange = evt => setUsername(evt.target.value);

    const onClick = () => {
        props.onLogin(username);
      }
    
  return (
    <div className="chat-login-page-container">
	  <div className="chat-login-page-controls-container">
	    <h4>Set your username</h4>
        <input type="text" 
               placeholder="Username"
               value={username} 
               onChange={onChange} />
        <button type="button" onClick={onClick} disabled={username.length === 0}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
