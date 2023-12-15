import React, {useState} from 'react';
import Login from './Login';
import Main from './main';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (LoggedInUsername) => {
    setIsLoggedIn(true);
    setUsername (LoggedInUsername);
  };

  return(
    <div>
      {isLoggedIn ? (
        <Main username={username}/>
      ) : (
        <Login onLogin={handleLogin}/>
      )}
    </div>
  );
};

export default App;