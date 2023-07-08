import { Link, Route, Routes } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import LoginScreen from "../screen/LoginScreen";
import {menu} from '../data/data'
import Profile from "../screen/Profile";
import { useState } from "react";
import Productdetails from "../screen/Productdetails";
import Cart from "../screen/Cart";
import Payment from "../screen/Payment";

export default function RouterNav(){
const [user,setUser] = useState(localStorage.getItem("user"))
console.log(menu);
function logout(){

  localStorage.clear()
  window.location.reload()
}
    return(
      <>
      <div className="navbar">
        <Link to="/" className="nav-link">Home</Link>
       {
        user===null?
        <>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        </>
       :
       <>
        <Link to="/profile" className="nav-link">Profile</Link>
       <button className="btnLogout" onClick={logout}>Logout</button>
        </>
       }
        </div>
    <Routes>
    <Route  path="/" Component={HomeScreen}/>
        <Route  path="/home" Component={HomeScreen}/>
        <Route  path="/register" Component={RegisterScreen}/>
        <Route  path="/login" Component={LoginScreen}/>
        <Route  path="/profile" Component={Profile}/>
        <Route  path="/details" Component={Productdetails}/>
        <Route  path="/cart" Component={Cart}/>
        <Route  path="/payment" Component={Payment}/>
        <Route  path="*" Component={HomeScreen}/>
        </Routes>
      </>
    )
  }