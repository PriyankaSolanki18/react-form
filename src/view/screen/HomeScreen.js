import { useState } from "react"

export default function HomeScreen(){
  const [user,setUser] = useState(localStorage.getItem("user"))

  function logout(){
    localStorage.clear()
    window.location.reload()
  }
    return(
      <>
      
      <h1> HomeScreen</h1>
{user&&
      <input type="button" value="logout" onClick={logout}/>
     }     </>
    )
  }