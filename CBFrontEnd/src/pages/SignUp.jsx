import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';


function SignUp() {


       
  const[user, setUser] = useState({
    userId: '',
    accountName:'',
    accountPassword:'',
  });


const changeValue=(e)=>{
    console.log(e);
    setUser({
     ...user, [e.target.name]:e.target.value  
    });
    console.log(e.target.name + " name "  );
    console.log(e.target.value + " value " );
  }

  const navigate = useNavigate();

const submitUser =(e)=>{
    e.preventDefault();
    fetch(" http://localhost:8080/api/user",{
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
        navigate("/");
      }else{
        alert('fails');
      }
   
    });

}

      return (
        <div>
          <h2>Sign Up</h2>
         <Form onSubmit = {submitUser}>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Create UserId</Form.Label>
              <Form.Control type="text"  placeholder="Enter userId" name="userId" onChange = {changeValue}  required/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Create Username</Form.Label>
              <Form.Control type="text"  placeholder="Enter username" name="accountName" onChange = {changeValue}  required/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Create Password</Form.Label>
              <Form.Control type="password"  placeholder="Password" name="accountPassword" onChange = {changeValue} required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>      
          </Form> 
          <a href="/login">Login</a>
        </div>
      );
 
}

export default SignUp;