import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import LoginAuth from "../components/LoginAuth";


function Login() {

    const [userId,setUserId]=useState('');
    const [accountPassword, setAccountPassword] = useState('');
    const[message, setMessage] = useState('');
    const [user, setUser] = useState()

    const navigate = useNavigate();

    const handleUserId = (e) => {
      setUserId(e.target.value);
     
    }
      
    const handleAccountPassword = (e) => {
      setAccountPassword(e.target.value);     
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = { userId, accountPassword }
      // calls LoginAuth login method to post userId and accountPassword to backend and check for matching data
      const response = await LoginAuth.login({ userId, accountPassword});
      try{
        if(response.data === 'Login Successful'){
          setUser(response.data)
          localStorage.setItem('user', userId)
          console.log(response.data)
          navigate('/dashboard');
         }
        else{
          setMessage('Invalid Username or Password');
        }
      }
      catch(error){
          setMessage('Invalid Username or Password');
      }

    }

    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setUser(foundUser);
      }
    },[]);

    // If the user is already logged in, navigate to the analysis page
    if (user) {
      navigate('/dashboard');
    }
    
    return (
        <div>
          <h2>Login</h2>
          {/* displays the setMessages defined above when they occur */}
          {message && <div className="alert alert-daner">{message}</div>}
          <Form onSubmit = {handleSubmit}>
          <div>
            <label htmlFor="userId">UserId</label>
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
