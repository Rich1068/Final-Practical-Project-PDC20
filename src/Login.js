import React, {useState} from 'react';
import './Css/login.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Login = ({onLogin})=> {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');  

    const handleLogin = () => {
        if (username&&password) {
            onLogin(username);
            
        }else{
            alert('Username or Password is missing')
        };
    }

return(
<Router>
<div className='body' >

<div className='big-container'>
  <div className="login-container">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <img style={{ width: '300px', height: 'auto' }} src='assets/logo.png' alt=''/>
  <form>
    <br></br>
    <br></br>
    <br></br>
    <label><b>Username</b></label>
    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Input Username'/>
    <br></br>
    <br></br>
    <br></br>
    <label><b>Password</b></label>
    <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Input Password'/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='login'>
    <Link to='/home' onClick={handleLogin}>Login </Link>
    </div>
  </form>

  </div>

</div>
</div>
</Router>
/* <div class="background">
<div class="shapee"></div>
<div class="shapee"></div>
</div>
<form class="formm">
<h3>Login Here</h3>

<label for="username" class="formm">Username</label>
<input type="text" placeholder="Username" value = {username} onChange={(e)=> setUsername(e.target.value)} class="formm"></input>

<label for="password" class="formm">Password</label>
<input type="password" placeholder="Password" value = {password} onChange={(e)=> setPassword(e.target.value)} class="formm"></input>

<button class="formm" type="button" onClick={handleLogin}>Log In</button>

</form> */
)
};

export default Login;

