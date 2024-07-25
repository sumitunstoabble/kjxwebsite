import React, {useState} from 'react'
import styled from 'styled-components';
import {useAuth} from "./AuthContext"
import { useNavigate } from 'react-router-dom';

const SignUpAdmin = () => {

    const { SignUp } = useAuth()
    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await SignUp(formData)
    navigate("/=kjxsofttechbdhd-h652hdsnadmin=login")
    console.log(formData)
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <FormGroup>
          <Label htmlFor="name">Username:</Label>
          <Input
            type="text"
            id="name"
            placeholder="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="email"
            name = "email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            placeholder="password"
            id="password"
            required
            name = "password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </LoginForm>
    </LoginContainer>
  )
}

export default SignUpAdmin

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

const FormGroup = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color:lightgray ;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
