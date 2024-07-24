import React, { useState } from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: 'Jost', sans-serif;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
`;

const MainContainer = styled.div`
  width: 450px;
  height: 500px;
  background: red;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

const CheckBoxInput = styled.input`
  display: none;
`;

const SignupContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
color: #6d44b8;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    color: #6d44b8;
  }
`;

const Input = styled.input`
  width: 60%;
  height: 40px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background: #6d44b8;
  }
`;

const LoginContainer = styled.div`
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.8s ease-in-out;
`;

const LoginLabel = styled.label`
  color: #573b8a;
  font-size: 1.5em; /* Adjust the font size */
  transform: scale(0.6);
`;

const SlideNavbarForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BodyContainer id='box'>
      <MainContainer>
        <CheckBoxInput type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />

        <SignupContainer>
          <Label htmlFor="chk" aria-hidden="true">Sign up</Label>
          <Input type="text" name="txt" placeholder="User name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="pswd" placeholder="Password" required />
          <Button>Sign up</Button>
        </SignupContainer>

        <LoginContainer style={{ transform: isChecked ? 'translateY(-500px)' : 'translateY(-180px)' }}>
          <Label htmlFor="chk" aria-hidden="true">Login</Label>
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="pswd" placeholder="Password" required />
          <Button >Login</Button>
          <LoginLabel htmlFor="chk" aria-hidden="true">Login</LoginLabel>
        </LoginContainer>
      </MainContainer>
    </BodyContainer>
  );
}

export default SlideNavbarForm;
