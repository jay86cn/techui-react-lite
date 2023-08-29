import { useState,useEffect } from 'react'
import {AdaptivePanel} from "techui-react-lite"
import Layout from "./layout"

export default ()=>{
  const [APConfig]=useState({
    backgroundFillAll:false,
    backgroundName:"A1",
    height:930,
    userSelect:true,
    chartCount:2,
  })
  useEffect(()=>{
    
  },[])

  return (
    <AdaptivePanel config={APConfig}>
      <Layout></Layout>
    </AdaptivePanel>
  )
}

