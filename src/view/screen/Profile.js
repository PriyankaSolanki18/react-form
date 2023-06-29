import { useState } from "react"

export default function Profile(){
  const [user,setUser] = useState(localStorage.getItem("user"))

    return(
      <>
      
      <h1> ProfileScreen</h1>
          </>
    )
  }