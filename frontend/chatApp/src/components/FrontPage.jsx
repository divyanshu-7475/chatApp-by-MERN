
import React,{ useEffect, useState } from "react";
import "./FrontPage.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"


import {loginUser} from "../features/user/user.Slice.js"

let nav='/'


function MainPage(){
    
    const navigate=useNavigate()
    const dispatch=useDispatch()

    
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const refreshToken=localStorage.getItem('refreshToken') || ''
    if(refreshToken!==''){
        axios.get(`http://localhost:8000/api/v1/users/current/${refreshToken}`)
        .then((response)=>{
            const user=response.data.data
            dispatch(loginUser(user))
            nav='/user/'+user?._id
            navigate(nav)
        }).catch((error)=>{
            console.log("refresh token expired")
        })
    }


    function Register(){
        navigate("/register")
    }

    

    const Login=async(e)=>{
        e.preventDefault()
        

        axios.post("http://localhost:8000/api/v1/users/login",{
                username:'',
                email:userName,
                password:password
        }).then((response)=>{
            const data=response.data.data
            const username="/user/"+data.user._id
            localStorage.setItem('accessToken',data.accessToken)
            localStorage.setItem('refreshToken',data.refreshToken)
            dispatch(loginUser(data.user))
            
            navigate(username)
            

            
        })
        .catch((error)=>{
            console.log("frontend error:",error)
        })
        
        
        
    }
    

    return (
        <>
        
        <body>
            <div className='chatBody'>
            <div className='intro'>
                <img src="https://res.cloudinary.com/dxr8h1oud/image/upload/v1730861538/w3qwunkvbis7phxzteno.png" alt="logo-img"className='logo-img'/>
                <div className="app-name">
                    <h1>SayHello</h1>
                    <h3><i>Let's Chat</i></h3> 
                    <button  className="login-button">Login</button> 
                    <button onClick={Register} className="register">Register</button>
                </div>
            </div>
            <div id="login">
                <div className="form-body">
                    <form  className="login-form">
                        <label htmlFor="username">Enter Username/Email</label>
                        <input type="text" onChange={(e)=>{setUserName(e.target.value)}} id="username" name="username" required />
                        <label htmlFor="password">Enter password</label>
                        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} id="password"  name="password" required/>
                        <input type="submit" value="Login" onClick={Login} id="submit"/>
                    </form>
                </div>
            </div>
        </div>
        </body>
        </>
    )
}

export default MainPage