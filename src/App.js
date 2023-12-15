import React, {useState} from 'react';
import Login from './Login';
import Main from './main';

{/*import logo from './logo.svg';
import './App.css';
import React, {userstate} from 'react';

function App() {
  const [personName, setPersonName] = React.useState('');
  
  return (
    <div className='container'>
      <h1>Hello, tangible specimen named {personName}.</h1>
      <p>Yesterday, I woke up sucking a lemon.</p>
      <ul>
        <li>
          <button>
            <span role="img">👾</span>
          </button>
        </li>
      </ul>
      <input type="text" onChange = {(e) => setPersonName(e.target.value)}/>
    </div>
  )
}*/}

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