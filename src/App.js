import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterNav from "./view/routernav/RouterNav";
import './view/style/style.css'
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="*" Component={RouterNav}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}