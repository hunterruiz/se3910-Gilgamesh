
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SignUp() {

    return (
        <div>
         <Form >
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Create Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Create Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button> 
          </Form>
        </div>
      );
 
}

export default SignUp;
