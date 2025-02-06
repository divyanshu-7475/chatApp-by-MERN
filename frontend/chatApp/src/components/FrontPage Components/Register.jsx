import "./Register.css"
import { Navigate, useNavigate } from "react-router-dom";

function Register() {

    const isLoggedin=localStorage.getItem('accessToken')!==null|| false
    let nav='/'
    if(isLoggedin){
        const user=JSON.parse(localStorage.getItem('user'))
        nav='/user/'+user._id
    }
    const navigate=useNavigate()


    
    function Login(){
        navigate("/")
    }

    return (
        <>
        {isLoggedin && <Navigate to={nav}/>}
        <body>
            <div className='chatBody'>
            <div className='intro'>
                <img src="https://res.cloudinary.com/dxr8h1oud/image/upload/v1730861538/w3qwunkvbis7phxzteno.png" alt="logo-img"className='logo-img'/>
                <div className="app-name">
                    <h1>SayHello</h1>
                    <h3><i>Let's Chat</i></h3>  
                    <button onClick={Login} className="login">Login</button> 
                    <button  className="register-button">Register</button>
                </div>
            </div>
            <div id="register">
            
            </div>
            <div className='footer'></div>
            </div>
        </body>
        
        </>
    )
}
export {Register}