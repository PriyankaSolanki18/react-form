import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default  function Cart(){
const loc =useLocation()
const [data,setData] = useState(loc.state)
const nav = useNavigate()
    
   let [qtyproduct,setQtyProduct] = useState(loc.state.qtyproduct)
   let [totalrate,setTotalRate] = useState(loc.state.rate)

console.log(data);

    return (
        <div className="pdetails">
            <div className="pdetails-img">
                <img src={data.image} />
            </div>    
            
            <div className="pdetails-text">
                <p>{data.productname}</p>
                <p>Rs.{data.rate}/-</p>
                <p>Qty:{qtyproduct}</p>  
            </div>    
            
            <div className="pdetails-pay">
                <button onClick={()=>nav('/payment',{state:""})}>Order Now</button>
            </div>    
        </div>
    )
}