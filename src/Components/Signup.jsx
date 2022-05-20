import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import { signup } from "../Redux/Signup/action";
import styled from 'styled-components'
import Button from '@mui/material/Button';
import "./Login.css";
import { logout } from "../Redux/Login/action";

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
`


export const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       email:"",
       password:"",
    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const loading = useSelector(store=>store.signup.loading);
    const error = useSelector(store=>store.signup.error);
    const isauthenticated = useSelector(store=>store.signup.isauthenticated);
    // console.log(loading, error, isauthenticated);
    const handleSubmit = ()=>{
        dispatch(signup(form)); 

        
    }
    if(isauthenticated){
        navigate("/login");
    }
    

    const  disabled = form.name.length === 0 || form.password.length === 0 
    return (
        <div className="login">
            <LoginBox>

            <h3 style={{marginTop:"20px",fontWeight:"bold"}}>Signup</h3>
            <input className="input" onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="username" maxLength={6}/> <br />
            <input className="input" onChange={(e)=>{inputHandle(e)}} type="email" name="" id="email" placeholder="email"/> <br /> 
            <input className="input" onChange={(e)=>{inputHandle(e)}} type="password" name="" id="password" placeholder="Password"/> <br /> <br />
           
            <Button style={{backgroundColor:"rgb(165,42,42)", color:"black", width:"80%"}} 
            onClick={()=>{
                handleSubmit()
                 dispatch(logout())
                 }}  disabled={disabled} >{loading?"Signing up...":"SIGNUP"}</Button>
            <hr />
            { error && <p style={{color:"rgb(165,42,42)", padding:"2px"}}>somthing went wrong</p>}
             <span>Already Have Account?</span>
            <span onClick={()=>navigate("/login")} style={{color:'blue', cursor:"spanointer", fontWeight:"400", fontSize:"18px"}} > Login</span>
            </LoginBox>
        </div>
    )
}