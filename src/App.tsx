// import { useState,useEffect } from 'react'
import {HashRouter} from 'react-router-dom'
import Routers from "./router";

const test=()=>{
  console.log("Routers---",Routers);
  
  return (
    <HashRouter>
      <Routers></Routers>
    </HashRouter>
  )
}
export default test