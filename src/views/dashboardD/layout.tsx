///<reference path="./types/layout.d.ts" />
import {TechTitleA2,TechBorderA1,PanelTitleA1,$c} from "techui-react-lite"

import ExternalLinks from "@/common/externalLinks"
import MainNav from "@/common/mainNav"

import "./less/layout.less"
import CounterGrid from "./portlet/counter-grid"
import ChartBar from "./portlet/chart-bar"
import ChartLine from "./portlet/chart-line"
import ChartBarHoriz from "./portlet/chart-barHoriz"
import ChartBarHorizScroll from "./portlet/chart-barHorizScroll"
import ChartGaugeTriple from "./portlet/chart-gaugeTriple"
import ChartSunburst from "./portlet/chart-sunburst"
import ChartMap from "./portlet/map/chart-map"

export default ()=>{
  const areas=[
    {name:"left",portlets:[
      {id:"l2",title:"In & Out",component:"ChartBarHoriz",border:"TechBorderA1",hideTitle:true},
      {id:"l3",title:"Revenue",component:"ChartLine",border:"TechBorderA1",hideTitle:true},
      {id:"l1",title:"Sales tasks",component:"ChartBarHorizScroll",border:"TechBorderA1",hideTitle:true},
    ]},
    {name:"right",portlets:[
      {id:"r1",title:"Sales Status",component:"CounterGrid",border:null,hideTitle:true},
      {id:"r2",title:"Task Completion",component:"ChartGaugeTriple",border:"TechBorderA1",hideTitle:true},
      {id:"r3",title:"Business Profit",component:"ChartSunburst",border:"TechBorderA1"},
    ]},
  ]
  const techTitleConfig={ 
    width:1000,
    backgroundColor:$c.cbA01,
    decorationColor:[$c.cbA02,$c.bll5],
    fontColor:[$c.bll7,$c.bll5],
    decoration:false,
  }
  return (
    <div className="dashboardD">
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
      <TechTitleA2 config={techTitleConfig as IConfigTT}> TechUI Data Visualization Tool </TechTitleA2>
      {/* <EchartMap /> */}
      <ChartMap></ChartMap>
    </div>
  )
}


const components={
  PanelTitleA1,
  TechBorderA1,

  CounterGrid,
  ChartBar,
  ChartLine,
  ChartBarHoriz,
  ChartBarHorizScroll,
  ChartGaugeTriple,
  ChartSunburst
}

const SubComponent=({item}:ISubCompSlot)=>{
  const BorderCurrent=item.border&&components[item.border]
  console.log("BorderCurrent",item.border);
  
  const ComponentCurrent=components[item.component]
  const panelTitleConfig={
    width:160,
    color:$c.bk,
  }

  const getConfig=()=>{
    const {id}=item
    console.log("id",id);
    
    if(id=='r3'){
      return {
        directionAlt: true,
        rotate: "z",
        opacity: 0.7,
        backgroundColor:$c.gyl1,
        decorationColor:[$c.cyl3,$c.bll4],
        borderColor:$c.gyl5,
        titleColor:$c.bk
      }
    }else if(id.includes("l")){
      return {
        title:item.title,
        titleWidth:120,
        decoration:false,
        decorationAlt: true,
        rotate: "y",
        opacity: 0.7,
        backgroundColor:$c.gyl1,
        decorationColor:[$c.cyl3,$c.bll4],
        borderColor:$c.gyl5,
        titleColor:$c.bk
      }
    }
    return {
      title:item.title,
      titleWidth:130,
      decoration:false,
      opacity:.7,
      backgroundColor:$c.gyl1,
      decorationColor:[$c.cyl3,$c.bll4],
      borderColor:$c.gyl5,
      titleColor:$c.bk
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
