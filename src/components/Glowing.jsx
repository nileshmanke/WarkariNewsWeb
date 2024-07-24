import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eceffc;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109), 0 1px 1px rgba(128, 128, 128, 0.155),
    0 2.1px 2.1px rgba(128, 128, 128, 0.195), 0 4.4px 4.4px rgba(128, 128, 128, 0.241),
    0 12px 12px rgba(128, 128, 128, 0.35);

  h1 {
    margin: 0 0 24px 0;
  }
`;

const FormInputMaterial = styled.div`
  position: relative;
  width: 100%;
  margin: 12px 0;
  
  input {
    color: white;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid white;
    transition: border-bottom 0.3s;
    
    &:focus {
      border-bottom: 1px solid var(--primary-color);
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: transform 0.3s ease-out, color 0.3s;

    input:focus + &,
    input:not(:placeholder-shown) + & {
      transform: translateY(-24px) scale(0.8);
      color: var(--primary-color);
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 20px;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  background: transparent;
  color: white;
  margin: 18px 0 9px 0;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, var(--primary-color), transparent);
    transform: translateX(-100%);
    transition: 0.6s;
  }

  &:hover {
    background: transparent;
    box-shadow: 0 0 20px 10px rgba(51, 152, 219, 0.5);
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const Glowing = () => {
  return (
    <BodyContainer>
      <LoginForm action="javascript:void(0);">
        <h1>Login Form</h1>
        <FormInputMaterial>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          <label htmlFor="username">Username</label>
        </FormInputMaterial>
        <FormInputMaterial>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          <label htmlFor="password">Password</label>
        </FormInputMaterial>
        <Button type="submit" className="btn-primary btn-ghost">
          Login
        </Button>
      </LoginForm>
    </BodyContainer>
  );
};

export default Glowing;
