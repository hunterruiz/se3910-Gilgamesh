import { useEffect, useState } from "react";

function Login() {

//   const[user, setUser] = useState({
//     accountName:'',
//     accountPassword:'',
//   });

// const changeValue=(e)=>{
//   console.log(e);
//   setUser;({
//     ...user,[e.target.name]:e.target.value
//   });
//   console.log(e.target.name + "name");
//   console.log(e.target.value + "value");
// }

// const navigate = useNavigate();  


// const submitUser =(e)=>{
//     e.preventDefault();
//     fetch("http://localhost:8080/user", {
//       method:"GET",
//       headers:{
//         "Content-Type" : "application/json"
//       },
//       body: JSON.stringify(user)
//     })
//     .then(res=>{
//         console.log(1,res);
//         if(res.status === 201){
//           return res.json();
//         }else{
//           return null;
//         }
//       })
//     .then(res=>{
//       console.log(res)
//       if(res!==null){
//         navigate("/");
//       }else{
//         alert('fails');
//       }
    
//     });

// }    


    return (
        <div>
          {/* <Form onSubmit = {handleLogin}>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Input type="text"  placeholder="Enter username" name="accountName" onChange = {changeValue} required  />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Input type="password"  placeholder="Password" name="accountPassword" onChange = {changeValue} required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>      
          </Form>  */}
          <a href="/signUp">Sign up</a>
        </div>
      );
 
}

export default Login;
