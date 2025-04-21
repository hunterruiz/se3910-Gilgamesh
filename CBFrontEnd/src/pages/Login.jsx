import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';


function Login() {

 const[user, setUser] = useState({
        accountName:'',
        accountPassword:'',
      });

    const changeValue=(e)=>{
      console.log(e);
      setUser;({
        ...user,[e.target.name]:e.target.value
      });
      console.log(e.target.name + "name");
      console.log(e.target.value + "value");
    }

    const navigate = useNavigate();  


    const submitUser =(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/user", {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res=>{
            console.log(1,res);
            if(res.status === 201){
              return res.json();
            }else{
              return null;
            }
          })
        .then(res=>{
          console.log(res)
          if(res!==null){
            navigate("/saved");
          }else{
            alert('fails');
          }
        
        });
    
    }  

      return (
        <div>
         <Form onSubmit = {submitUser}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"  placeholder="Enter username" name="accountName" onChange = {changeValue}  />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  placeholder="Password" name="accountPassword" onChange = {changeValue} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button> 
          </Form>
          {/* <a href="./pages/SignUp">Sign Up</a> */}
        </div>
      );
 
}

export default Login;