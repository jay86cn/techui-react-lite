import { useState,useEffect } from 'react'
import {AdaptivePanel,$c} from "techui-react-lite"
import Layout from "./layout"

export default ()=>{
  const [APConfig]=useState({
    backgroundFillAll:false,
    backgroundName:"A1",
    height:930,
    userSelect:true,
    chartCount:5,
    // loading:false,
    backgroundConfig:{
      vectorBGA:$c.wh,
      vectorBGB:$c.wh,
      vectorBGC:$c.wh,
      vectorBGX:$c.bk.replace("#","%23"),
      vectorBGXOpa:0.03,
    }
  })
  useEffect(()=>{
    
  },[])

  return (
    <AdaptivePanel className="dashboardA-wrap" config={APConfig}>
      <Layout></Layout>
    </AdaptivePanel>
  )
}

