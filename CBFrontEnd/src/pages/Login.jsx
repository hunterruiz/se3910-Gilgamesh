import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import LoginAuth from "../components/LoginAuth";


function Login() {

    const [userId,setUserId]=useState('');
    const [accountPassword, setAccountPassword] = useState('');
    const[message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleUserId = (e) => {
      setUserId(e.target.value);
     
    }
      
    const handleAccountPassword = (e) => {
      setAccountPassword(e.target.value);     
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      // calls LoginAuth login method to post userId and accountPassword to backend and check for matching data
      const response = await LoginAuth.login({ userId, accountPassword});
      try{
        if(response.data === 'Login Successful'){
          navigate('/');
         }
        else{
          setMessage('Invalid Username or Password');
        }
      }
      catch(error){
          setMessage('Invalid Username or Password');
      }

    }

    return (
        <div>
          <h2>Login</h2>
          {/* displays the setMessages defined above when they occur */}
          {message && <div className="alert alert-daner">{message}</div>}
          <Form onSubmit = {handleSubmit}>
          <div>
            <label htmlFor="userId">Username</label>
            <input
              type = "text"
              placeholder="Username"
              id="userId"
              value = {userId}
              onChange={handleUserId} required>
            </input>
          </div>
          <div>
            <label htmlFor="accountPassword">Password</label>
            <input
              type = "password"
              placeholder="Enter Password"
              id="accountPassword"
              value = {accountPassword}
              onChange={handleAccountPassword} required>
            </input>
          </div>
            <Button variant="primary" type="submit">
                Login
            </Button>      
          </Form> 
          <a href="/signUp">Sign up</a>
        </div>
      );
 
}

export default Login;
