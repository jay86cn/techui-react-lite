import { useState,useEffect } from 'react'
import {AdaptivePanel,timer} from "techui-react-lite"
import Layout from "./layout"

export default ()=>{
  const [APConfig,setAPConfig]=useState({
    backgroundFillAll:false,
    backgroundName:"A1",
    height:930,
    userSelect:true,
    loading:true,
  })
  useEffect(()=>{
    timer.s("disLoding",()=>{
      setAPConfig((pre)=>({
        ...pre,
        loading:false
      }))
    },1000)
  },[])

  return (
    <AdaptivePanel config={APConfig}>
      <Layout></Layout>
    </AdaptivePanel>
  )
}

