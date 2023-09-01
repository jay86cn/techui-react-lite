import { useState,useEffect } from 'react'
import {AdaptivePanel} from "techui-react-lite"
import Layout from "./layout"

export default ()=>{
  const [APConfig]=useState({
    backgroundFillAll:false,
    backgroundName:"A1",
    height:930,
    userSelect:true,
    chartCount:6,
    // loading:false
  })
  useEffect(()=>{
    
  },[])

  return (
    <AdaptivePanel className="dashboardA-wrap" config={APConfig}>
      <Layout></Layout>
    </AdaptivePanel>
  )
}

