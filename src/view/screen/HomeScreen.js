import { useState } from "react"
import {product} from '../data/data'
export default function HomeScreen(){
  const [user,setUser] = useState(localStorage.getItem("user"))
const[product1,setProduct] =useState(product)

  function logout(){
    localStorage.clear()
    window.location.reload()
  }

  console.log(product1);
    return(
      <>
      
      <h1 className="prod-name">OUR PRODUCTS</h1>
      {product1.map(d=>(
        <img src={d.image}  className="prodcutimage"/>
      ))
}
     </>
    )
  }