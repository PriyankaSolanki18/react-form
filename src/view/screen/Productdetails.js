import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Productdetails(){
    const nav = useNavigate()
    const loc =useLocation()
    const [data,setData] = useState(loc.state)

console.log(data);  
  return(
        <>
        <h1 className="prod-name">Product Details</h1>
        <div className="pdetails">
            <div className="pdetails-img">
                <img src={data.image} />
            </div>    
            <div className="pdetails-text">
                <p className="nameProd">{data.productname}</p>
                <p>Rs.{data.rate}/-</p>
                <button>
                <span>-</span>
                </button>
                <span className="span-qty">1</span>
                <button>
                <span>+</span>
                </button>
            </div>    

            <div className="pdetails-pay">
                <p className="namePay">Total pay: </p>
                <button onClick={()=>nav('/cart',{state:""})}>Add To Cart</button>
                <button onClick={()=>nav('/payment',{state:""})}>Buy Now</button>
            </div>    
        </div>
        </>
    )
}