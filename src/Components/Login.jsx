import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../Redux/Login/action";
import styled from "styled-components";
import Button from '@mui/material/Button';
import "./Login.css";
import { logout2 } from "../Redux/Signup/action";

const LoginBox = styled.div`
width: 450px;
height: 300px%;
// border:2px solid green;
margin: auto;
margin-top: 10%;
// background-color: rgb(235,216,195);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
padding: 10px;
margin-bottom: 20px;
@media (max-width: 600px) {
    width: 90%;
    
}
`;

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated,loading,error,token} = useSelector((state) => state.login);
  const all = useSelector(store=>store.login)
  // console.log(all)

  const handlelogin = () => {
    const userDetails = {
      email,
      password,
    };
    dispatch(login(userDetails));
    dispatch(logout2())
    
  };
  if (isAuthenticated) {
    navigate("/");
  }



  const disabled = email.length === 0 || password.length === 0 

  return (
    <LoginBox>
      <div >
        <h3 style={{marginTop:"20px",fontWeight:"bold"}}>Login</h3>
       
        
          <input
          className="input"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       
        <br />
       
          <input
           className="input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      
        <br />
        <br />
        <Button style={{backgroundColor:"rgb(165,42,42)",color:"black", width:"80%"}} disabled={disabled} onClick={()=>handlelogin()}>
          {loading?"Loging in...":"Login"}
        </Button>
        <hr />
        {error && <div style={{color:"rgb(165,42,42)",padding:"2px"}}>somthing went wrong</div> }
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </LoginBox>
  );
};
