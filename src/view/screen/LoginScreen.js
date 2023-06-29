import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginScreen(){
  const nav = useNavigate()

  const [user,setUser] = useState(localStorage.getItem("user"))
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function Loginruser(){
    console.log(email);
    console.log(password);
    if(email!=="" && password!==""){
      localStorage.setItem("user",email)
      nav("/home")
      window.location.reload()
      setEmail("")
    setPassword("")
         
    }
    else{

      alert("enter form...")
    
    }
   
  }


  function  Registeruser(){
alert("register")
nav("/register")
  }

  function usernav(){
    console.log("nav");
 
    
    nav("/home")
  }
  console.log(user);
    return(
      <>
      {
        user==null?
     <div className="register-main-div">
      <div className="register-main-div-mid">
        <div className="register-main-div-info">
          <h2>User Login..</h2>
        </div>  
          
        <div className="register-main-div-email">
          <h4>Enter Email.</h4>
          <input type="text"  value={email} onChange={user=>setEmail(user.target.value)} placeholder="Enter email..." className="register-main-div-email-input"/>
        </div>   
        <div className="register-main-div-email">
          <h4>Enter password.</h4>
          <input type="password"  value={password} onChange={user=>setPassword(user.target.value)}  placeholder="Enter password..." className="register-main-div-email-input"/>
        </div>  

        <div className="register-main-div-btn">
          <input type="button" onClick={Loginruser} className="register-main-div-register-btn" value="Login"/>
        </div>  
        <div className="line">
           </div>  
        <div className="register-main-div-btn">
          <input type="button" onClick={Registeruser} className="register-main-div-register-btn" value="Register"/>
        </div>  
      </div>
     </div>
     :
    usernav()
}
      </>
    )
  }