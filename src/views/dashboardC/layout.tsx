///<reference path="./types/layout.d.ts" />
import {TechTitleA2,PanelTitleB1} from "techui-react-lite"

import ExternalLinks from "@/common/externalLinks"
import MainNav from "@/common/mainNav"

import "./less/layout.less"
import ChartBar from "./portlet/chart-bar"
import ChartGaugeTriple from "./portlet/chart-gaugeTriple"
import ChartSunburst from "./portlet/chart-sunburst"
import ChartPie from "./portlet/chart-pie"
import ChartBarHorizScroll from "./portlet/chart-barHorizScroll"
import ChartHill from "./portlet/chart-hill"

import ChartMap from "./portlet/map/chart-map"

export default ()=>{
  const areas=[
    {name: "left", portlets: [
      {id: "r1", title: "Sales", component: "ChartBar",border:null},
      {id: "r2", title: "Task Completion", component: "ChartGaugeTriple",border:null},
      {id:"r3",title:"Expenditure Proportion",component:"ChartSunburst",border:null},
    ]},
    {name: "right", portlets: [
      {id: "l2", title: "Income and expenditure", component: "ChartPie",border:null},
      {id: "l3", title: "Business Income", component: "ChartBarHorizScroll",border:null},
      {id:"l1",title:"Industry Revenue Proportion",component:"ChartHill",border:null},
    ]},
  ]
  const techTitleConfig={ width:1000 }
  return (
    <div className="dashboardC">
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
      <TechTitleA2 config={techTitleConfig}> TechUI Data Visualization Tool </TechTitleA2>
      {/* <EchartMap /> */}
      <ChartMap></ChartMap>
    </div>
  )
}


const components={
  PanelTitleB1,

  ChartBar,
  ChartGaugeTriple,
  ChartSunburst,
  ChartPie,
  ChartBarHorizScroll,
  ChartHill,

}

const SubComponent=({item}:ISubCompSlot)=>{
  
  const ComponentCurrent=components[item.component]
  const panelTitleConfig={
    width:160,
  }

  return (
    <>
      <PanelTitleB1>{item.title}</PanelTitleB1>
      <ComponentCurrent></ComponentCurrent>
    </>
  )
}
