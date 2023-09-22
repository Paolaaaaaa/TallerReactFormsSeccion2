import logo from './logo.svg';
import './App.css';
import { Form, Button, InputGroup } from "react-bootstrap";

import { useState } from 'react';

function App() {
    // los encontré en regexr.com


  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{9,}/;


  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value});

    setValidationStates({
      ...validationStates,
      emailState: e.target.value.match(emailRegex), 
    });

    (!validationStates.emailState && !validationStates.passwordState )? setValid(true) : setValid(false)

  
  
  });


    const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value});

    setValidationStates({
      ...validationStates,
      passwordState: e.target.value.match(passwordRegex), 
    });

    (validationStates.emailState && validationStates.passwordState )? setValid(true) : setValid(false)


    });
    const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
    });
    

  const [formValues, setFormValues] = useState({email:"", password:"",
    favClass:"1"})
  const [validationStates, setValidationStates] = useState({
      emailState: false,
      passwordState: false
    });

    const [valid, setValid] = useState(true);


    const clickSubmit = (() => {
    alert(JSON.stringify(formValues))
    })

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          onChange={handleEmailChange} value={formValues.email}         
          
          />
          { (!validationStates.emailState) ?  <div class="text-danger">
          Your email should follow an established format.
        </div>:true}
        


          </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        onChange={handlePasswordChange} value={formValues.password} />

        { (!validationStates.passwordState) ?  <div class="text-danger">

        Your password should have numbers and letter and should be at least 9 char long</div>:true}

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" disabled={valid}>
        Submit
        </Button>
      </Form>
</div>
);

}

export default App;
