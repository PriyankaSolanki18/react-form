import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RegisterScreen(){

  const nav=useNavigate()
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function Registeruser(){
    console.log("register");
    console.log(username);
    console.log(email);
    console.log(password);
    if(username!=="" && email!=="" && password!==""){
      nav("/login")
      setEmail("")
    setPassword("")
    setUsername("")
         
    }
    else{

      alert("enter form...")
    
    }
  }

    return(
      <>
      
     <div className="register-main-div">
      <div className="register-main-div-mid">
        <div className="register-main-div-info">
          <h2>User Register..</h2>
        </div>  
        <div className="register-main-div-username">
          <h4>Enter userName.</h4>
          <input type="text"  value={username} onChange={user=>setUsername(user.target.value)}    placeholder="Enter name..." className="register-main-div-username-input"/>
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
          <input type="button" onClick={Registeruser} className="register-main-div-register-btn" value="Register"/>
        </div>  

      </div>
     </div>
      </>
    )
  }