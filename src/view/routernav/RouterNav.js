import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import LoginScreen from "../screen/LoginScreen";

export default function RouterNav(){
    return(
      <>
      <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/register" Component={RegisterScreen}/>
        <Route path="/login" Component={LoginScreen}/>
        <Route path="*" Component={HomeScreen}/>
      </Routes>
      </>
    )
  }