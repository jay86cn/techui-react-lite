
import {useState} from "react"
import "./less/layout.less"

import AdaptivePanel from "./demo-adaptivePanel"
import DecoFrame from "./demo-decoFrame"
import EchartsInit from "./demo-echartsInit"
import Loading from "./demo-loading"
import PanelTitle from "./demo-panelTitle"
import TechTitle from "./demo-techTitle"
import TechBorder from "./demo-techBorder"
import TechButton from "./demo-techButton"

import ExternalLinks from "@/common/externalLinks"
import MainNav from "@/common/mainNav"

interface INavData{
  comp:string;
  label:string;
  icon:string;
}

const components={
  AdaptivePanel,
  DecoFrame,
  EchartsInit,
  Loading,
  PanelTitle,
  TechTitle,
  TechBorder,
  TechButton
}

export default ()=>{
  const [current,setCurrent]=useState('EchartsInit')
  const nav=[
    {label:"TechBorder",comp:"TechBorder",icon:"i carbon:bring-to-front"},
    {label:"TechTitle",comp:"TechTitle",icon:"i carbon:circuit-composer"},
    {label:"TechButton",comp:"TechButton",icon:"i carbon:blog"},
    {label:"PanelTitle",comp:"PanelTitle",icon:"i carbon:account"},
    {label:"DecoFrame",comp:"DecoFrame",icon:"i carbon:assembly"},
    {label:"AdaptivePanel",comp:"AdaptivePanel",icon:"i carbon:center-to-fit"},
    {label:"ECharts",comp:"EchartsInit",icon:"i carbon:chart-line"},
    {label:"Loading",comp:"Loading",icon:"i carbon:recording"},
    {label:"Dashboard",comp:"Dashboard",icon:"i carbon:navaid-dme"},
  ]
  const clickAction=(item:INavData)=>{
    if(item.comp=="Dashboard"){
      // router.push('/dashboardA-cn')
    }else{
      setCurrent(item.comp)
    }
  }

  const ComponentCurrent=components[current]
  return (
    <div className="decorComp-wrap">
      <ExternalLinks/>
      <MainNav/>
      <div className="sider-nav">
        {nav.map((item,index)=>(
          <div onClick={()=>clickAction(item)} className={`item ${current==item.comp&&'active'}`} key={index}>
            <i className={item.icon}></i>
            <span className="desc">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="decor-content">
        <ComponentCurrent/>
      </div>
    </div>
  )
}

