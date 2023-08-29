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
    // $tUtils.$ti.s("disLoding",()=>{
    //   setAPConfig((pre)=>({
    //     ...pre,
    //     loading:false
    //   }))
    // },1000)

    // $tUtils.$ti.s("disLoding11",()=>{
    //   setAPConfig((pre)=>({
    //     ...pre,
    //     loading:true
    //   }))
    // },6000)
  },[])

  return (
    <AdaptivePanel config={APConfig}>
      <Layout></Layout>
    </AdaptivePanel>
  )
}

