import { useState } from "react"
import {product} from '../data/data'
import { useNavigate } from "react-router-dom"
export default function HomeScreen(){
const nav = useNavigate()
  const [user,setUser] = useState(localStorage.getItem("user"))

  const[product1,setProduct] =useState(product)

  function logout(){
    localStorage.clear()
    window.location.reload()
  }

  console.log(product1);
    return(
      <>
      
      <h1 className="prod-name">Our Products</h1>
      <div className="product-div">
      {product1.map(d=>(
 <div className="productshow" onClick={()=>nav('details',{state:d})}>
 <img src={d.image}  className="prodcutimage"/>
 <p>{d.productname}</p>
 <p>Rs.{d.rate}/-</p>
 </div>
      ))

}
</div>
     </>
    )
  }