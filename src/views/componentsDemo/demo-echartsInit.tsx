///<reference path="./demo.d.ts" />
import {useState} from "react"
import {TechBorderB4,PanelTitleA1} from "techui-react-lite";
import "./less/demo-echartsInit.less"

import chartBar from "./portlet/chart-bar"
import chartLine from "./portlet/chart-line"
import barHoriz from "./portlet/chart-barHoriz"
import barHorizScroll from "./portlet/chart-barHorizScroll"
import gaugeTriple from "./portlet/chart-gaugeTriple"
import pie from "./portlet/chart-pie"



export default ()=>{
  
  const [state,_setState]=useState<string[]>([
    "chartBar",
    "chartLine",
    "pie",
    "barHoriz",
    "barHorizScroll",
    "gaugeTriple",
  ])
  return (
    <div className="demo-echartsInit demo-deco">
      <div className="deco-wrap">
        <div className="deco-intro">
          <div className="intro">Intro ：</div>
          <div className="content">
            <p>The chart component, which is based on the echarts wrapper, is intended to make it less difficult to use and add some additional functionality, such as facilitating statistics on the number of global loads of charts to control loading effects. </p>
            <p>In addition, the data and configuration items in all the chart demos are separated to make it easier to assign data to the display. </p>
            <p>The full version of the charting component provides a smart color scheme tool that is integrated into the global theme. Once and for all, the mental burden of color matching for charts is removed. </p>
          </div>
        </div>
        <div className="deco-group">
          <div className="group-content">
            {state.map((item, index) => (
              <div className="echartsInit-item" key={index}>
                <BorderComponent chart={item}/>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
    
  )
}
const charts={
  chartBar,
  chartLine,
  barHoriz,
  barHorizScroll,
  gaugeTriple,
  pie
}

const BorderComponent=({chart}:{chart:string})=>{
  const ChartCurrent=charts[chart]
  
  return (
    <TechBorderB4>
      <PanelTitleA1>Chart Title</PanelTitleA1>
      <ChartCurrent></ChartCurrent>
    </TechBorderB4>
  )
}
