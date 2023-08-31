///<reference path="./types/layout.d.ts" />
import {TechTitleA1,TechBorderA1,TechBorderB4,PanelTitleA1} from "techui-react-lite"

import ExternalLinks from "@/common/externalLinks"
import MainNav from "@/common/mainNav"

import "./less/layout.less"
import ChartPictorialBar from "./portlet/chart-pictorialBar"
import ChartBar from "./portlet/chart-bar"
import ChartRadar from "./portlet/chart-radar"
import CounterGrid from "./portlet/counter-grid"
import ChartPie from "./portlet/chart-pie"
import ChartGaugeTriple from "./portlet/chart-gaugeTriple"
import ChartBarLine from "./portlet/chart-barLine"
import ChartLine from "./portlet/chart-line"
import ChartBarHoriz from "./portlet/chart-barHoriz"
import ChartBarHorizScroll from "./portlet/chart-barHorizScroll"


export default ()=>{
  const areas=[
    {name: "left", portlets: [
      {id:"l2",title:"Team Sales Completion",component:"ChartPictorialBar",border:"TechBorderA1",hideTitle:true},
      {id:"l3",title:"Business Income",component:"ChartBar",border:"TechBorderA1",hideTitle:true},
      {id:"l1",title:"Budget vs Actual",component:"ChartRadar",border:"TechBorderA1",hideTitle:true},
    ]},
    {name: "center", portlets: [
      {id:"c1",title:"Sales",component:"CounterGrid",border:null,hideTitle:true},
      {id:"c2",title:"Task Completion",component:"ChartPie",border:"TechBorderA1",hideTitle:true},
      {id:"c3",title:"Proportion of profit",component:"ChartGaugeTriple",border:"TechBorderA1",hideTitle:true},
      {id: "c4", title: "Contract Situation", component: "ChartBarLine", border: "TechBorderB4"},
    ]},
    {name: "right", portlets: [
      {id:"r1",title:"Sales Situation",component:"ChartLine",border:"TechBorderA1",hideTitle:true},
      {id:"r2",title:"Revenue Expenditure",component:"ChartBarHoriz",border:"TechBorderA1",hideTitle:true},
      {id:"r3",title:"Task Completion",component:"ChartBarHorizScroll",border:"TechBorderA1",hideTitle:true},
    ]},
  ]
  const techTitleConfig={ width:500 }
  return (
    <div className="dashboardB">
      <MainNav />
      <ExternalLinks />
      {areas.map((area) => (
        <div key={area.name} className={`area-box area-${area.name}`}>
          {area.portlets.map((item, index) => (
            <div key={index} className="portlet-wrapper">
              <SubComponent item={item}></SubComponent>
            </div>
          ))}
        </div>
      ))}
      <TechTitleA1 config={techTitleConfig}> TechUI Data Visualization Tool </TechTitleA1>
      {/* <EchartMap /> */}
    </div>
  )
}


const components={
  PanelTitleA1,
  TechBorderA1,
  TechBorderB4,

  ChartPictorialBar,
  ChartBar,
  ChartRadar,
  CounterGrid,
  ChartPie,
  ChartGaugeTriple,
  ChartBarLine,
  ChartLine,
  ChartBarHoriz,
  ChartBarHorizScroll,
}

const SubComponent=({item}:ISubCompSlot)=>{
  console.log("item",item);
  
  const BorderCurrent=item.border&&components[item.border]
  
  const ComponentCurrent=components[item.component]
  const panelTitleConfig={
    width:160,
  }

  const getConfig=()=>{
    const {id}=item
    if(id=='c2'){
      return {
        title:item.title,
        titleWidth:160,
        opacity: 0.5,
        decoration:false,
      }
    }else if(id=='c3'){
      return {
        title:item.title,
        titleWidth:160,
        opacity: 0.5,
        rotate:"y",
        decoration:false,
      }
    }else if(id.includes("l")){
      return {
        title:item.title,
        titleWidth:170,
        decoration:false,
        decorationAlt: true,
        rotate: "y",
        opacity: 0.5
      }
    }else{
      return {
        title:item.title,
        titleWidth:170,
        decoration:false,
        opacity:.5
      }
    }
  }
  if(item.border){
    return (
      <BorderCurrent config={getConfig()}>
        {!item.hideTitle&&<PanelTitleA1 config={panelTitleConfig}>{item.title}</PanelTitleA1>}
        <ComponentCurrent></ComponentCurrent>
      </BorderCurrent>
    )
  }else{
    return (
      <ComponentCurrent></ComponentCurrent>
    )
  }
}
