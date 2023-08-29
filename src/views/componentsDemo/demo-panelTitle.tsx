///<reference path="./demo.d.ts" />
import {useState} from "react"
import {PanelTitleA1,PanelTitleB1,TechBorderB3,TechBorderB4,$c} from "techui-react-lite";
import RadioGroup from "./common/radioGroup"
import "./less/demo-panelTitle.less"


export default ()=>{
  const [state,setState]=useState<IDemoState>({
    show:false,
    radioCurrent:["cfgOn"],
    radioGroup:[
      [
        {title: "Config Show", label: "cfgOn"},
        {title: "Config Hide", label: "cfgOff"},
      ]
    ],
    componentGroup:[
      {name:"PanelTitleA1",
        desc:"",
        children:[
          {component:"TechBorderB3",panelTitle:"PanelTitleA1",title:"Middle Title",config:{ }},
          {component:"TechBorderB3",panelTitle:"PanelTitleA1",title:"Panel Title Long Long",config:{
            fontSize:18,
            width:280
          }},
          {component:"TechBorderB3",panelTitle:"PanelTitleA1",title:"Custom Styles",config:{
            scale:1.3,
            position:"left",
            decorationColor:$c.aql5,
            fontWeight:"bold",
            color:$c.yel5
          }},
        ]
      },
      
      {name:"PanelTitleB1",
        desc:"",
        children:[
          {component:"TechBorderB4",panelTitle:"PanelTitleB1",title:"Side Title",config:{
            
          }},
          {component:"TechBorderB4",panelTitle:"PanelTitleB1",title:"Side Title",config:{
            fontSize:18,
          }},
          {component:"TechBorderB4",panelTitle:"PanelTitleB1",title:"Custom Styles",config:{
            scale:1.3,
            position:"right",
            decorationColor:$c.aql5,
            fontWeight:"bold",
            color:$c.yel5
          }},
        ]
      },
      
      
      
    ]
  })
  const [cfg]=state.radioCurrent
 
  return (
    <div className="demo-panelTitle demo-deco">
     
      <div className="border-toggle">
        <RadioGroup radioCurrent={state.radioCurrent} radioGroup={state.radioGroup} setRadio={setState}/>
      </div>
      <div className="deco-wrap">
        <div className="deco-intro">
          <div className="intro">Intro ：</div>
          <div className="content">
            <p>The block title component is a component used to add titles to some of the tech panels, such as TechBorderB1-B4 which is a type of panel that does not contain a tech title. </p>
            <p>This component type A was developed using dynamic SVG nodes. This component does not require adaptive functionality, but when setting its width, the SVG nodes will automatically calculate the positioning based on the title width. </p>
            <p>Configuration items are relatively simple, such as width, text color, decoration color, etc.</p>
          </div>
        </div>
        {state.componentGroup.map((item, index) => (
          <div className="deco-group" key={index}>
            <div className="group-name">
              <span className="title">{item.name}</span>
              <span className="desc">{item.desc}</span>
            </div>
            <div className="group-content">
              {item.children.map((subItem, subIndex) => (
                <div className="panelTitle-item" key={subIndex}>
                  <BorderComponent config={subItem.config} name={subItem.component} panelTitle={subItem.panelTitle} text={subItem.title}>
                    {cfg=="cfgOn"?<div className="config-params">{JSON.stringify(subItem.config, null, 2)}</div>:<></>}
                  </BorderComponent>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </div>
    
  )
}
const components={
  PanelTitleA1,
  PanelTitleB1,
  TechBorderB3,
  TechBorderB4
}

const BorderComponent=({children,panelTitle,text,name,config}:ISlotCompProcess)=>{
  const BorderCurrent=components[name]
  const TitleCurrent=components[panelTitle!]
  
  return (
    <BorderCurrent>
      <TitleCurrent config={config}>{text}</TitleCurrent>
      {children}
    </BorderCurrent>
  )
}
