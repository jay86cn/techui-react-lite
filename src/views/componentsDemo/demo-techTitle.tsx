///<reference path="./demo.d.ts" />
import {useState} from "react"
import {TechTitleA1,TechTitleA2,TechTitleA3,TechTitleA4,$c} from "techui-react-lite";
import RadioGroup from "./common/radioGroup"
import "./less/demo-techTitle.less"

export default ()=>{
  const [state,setState]=useState<IDemoState>({
    show:false,
    radioCurrent:["cfgOff"],
    radioGroup:[
      [
        {title: "Config Show", label: "cfgOn"},
        {title: "Config Hide", label: "cfgOff"},
      ]
    ],
    componentGroup:[
      {name:"TechTitleA1",
        desc:"The system title component with motion picture effect, the first title component originally developed.",
        children:[
          {component:"TechTitleA1",title:"TechUI Data Visualization",config:{
          }},
          {component:"TechTitleA1",title:"TechUI Data Visualization For Dashboard",config:{
            gradientBG:false,
            decorationColorAlt:true,
            width:700,
          }},
          {component:"TechTitleA1",title:"TechUI Data Visualization",config:{
            ani:false,
            backgroundColor:$c.aql5,
            decorationColor:[$c.aql3,$c.cyl5],
            fontColor:[$c.cyl9,$c.aql7],
          }},
          {component:"TechTitleA1",title:"TechUI Data Visualization",config:{
            dur:1,
            scale:.7,
            gradientReverse:true,
            decoration:false,
          }},
        ]
      },
      {name:"TechTitleA2",
        desc:"",
        children:[
          {component:"TechTitleA2",title:"TechUI Data Visualization",config:{
            width:950
          }},
          {component:"TechTitleA2",title:"TechUI Data Visualization",config:{
            decorationColorAlt:true,
          }},
          {component:"TechTitleA2",title:"TechUI Data Visualization",config:{
            backgroundColor:$c.acl6,
            decorationColor:[$c.acl3,$c.cyl7],
            fontColor:[$c.cyl9,$c.aql7],
          }},
          {component:"TechTitleA2",title:"TechUI Data Visualization",config:{
            scale:.7,
            gradientReverse:true,
            decoration:false,
          }},
          
          
        ]
      },
      
      {name:"TechTitleA3",
        desc:"",
        children:[
          {component:"TechTitleA3",title:"TechUI Data Visualization",config:{ }},
          {component:"TechTitleA3",title:"TechUI Data Visualization",config:{
            decorationColorAlt:true,
          }},
          {component:"TechTitleA3",title:"TechUI Data Visualization",config:{
            backgroundColor:$c.acl6,
            decorationColor:[$c.acl3,$c.cyl7],
            fontColor:[$c.cyl9,$c.aql7],
          }},
          {component:"TechTitleA3",title:"TechUI Data Visualization",config:{
            scale:.7,
            gradientReverse:true,
            decoration:false,
          }},
        ]
      },
  
      {name:"TechTitleA4",
        desc:"",
        children:[
          {component:"TechTitleA4",title:"TechUI Data Visualization",config:{ }},
          {component:"TechTitleA4",title:"TechUI Data Visualization",config:{
            decorationColorAlt:true,
          }},
          {component:"TechTitleA4",title:"TechUI Data Visualization",config:{
            backgroundColor:$c.acl6,
            decorationColor:[$c.acl3,$c.cyl7],
            fontColor:[$c.cyl9,$c.aql7],
          }},
          {component:"TechTitleA4",title:"TechUI Data Visualization",config:{
            scale:.7,
            gradientReverse:true,
            decoration:false,
          }},
        ]
      },
    ]
  })
  const [cfg]=state.radioCurrent
 
  return (
    <div className="demo-techTitle demo-deco">
     
      <div className="border-toggle">
        <RadioGroup radioCurrent={state.radioCurrent} radioGroup={state.radioGroup} setRadio={setState}/>
      </div>
      <div className="deco-wrap">
        <div className="deco-intro">
          <div className="intro">Intro ：</div>
          <div className="content">
            <p>The System Title component is a tech-style component that sits at the top of the page to display the name of the system. </p>
            <p>This component was developed using dynamic SVG nodes. This component does not require adaptive functionality, but when setting its width, the SVG node will automatically calculate the positioning based on the title width. </p>
            <p>Includes several configuration items, such as width, zoom level, animation, etc. The style can be customized, please refer to the configuration items in the case below. The full version of the style follows the system theme switch, the lite version has no theme feature. </p>
          </div>
        </div>
        {
          state.componentGroup.map((item,index)=>(
            <div className="deco-group" key={index}>
              <div className="group-name">
                <span className="title">{item.name}</span>
                <span className="desc">{item.desc}</span> 
              </div>
              <div className="group-content">
                {
                  item.children.map((subItem,subIndex)=>(
                    <div className="techTitle-item" key={subIndex}>
                      {
                        <ComponentProcess config={subItem.config} name={subItem.component}>
                          { subItem.title! }
                        </ComponentProcess>
                      }
                      {cfg=="cfgOn"?<div className="config-detail">{JSON.stringify(subItem.config, null, 2)}</div>:<></>}
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
    
  )
}
const components={
  TechTitleA1,
  TechTitleA2,
  TechTitleA3,
  TechTitleA4,
}

const ComponentProcess=({children,name,config}:ISlotCompProcess)=>{
  const ComponentCurrent=components[name]
  return <ComponentCurrent config={config}>{children}</ComponentCurrent>
}
