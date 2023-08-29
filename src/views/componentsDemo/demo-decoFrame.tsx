///<reference path="./demo.d.ts" />
import {useState} from "react"
import {DecoFrameA1,DecoFrameA2,DecoFrameA3,DecoFrameB1,DecoFrameB2,DecoFrameB3,DecoFrameB4,$c} from "techui-react-lite";
import RadioGroup from "./common/radioGroup"
import "./less/demo-decoFrame.less"
import FlipNumbers from 'react-flip-numbers';

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
      {name:"DecoFrameA1",
        desc:"",
        children:[
          {component:"DecoFrameA1",counter:369,config:{
          }},
          {component:"DecoFrameA1",icon:"i carbon:catalog",config:{
            decorationAlt:true,
            glow:false,
          }},
          {component:"DecoFrameA1",icon:"i carbon:catalog",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameA1",icon:"i carbon:catalog",config:{
            border:false,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
  
      {name:"DecoFrameA2",
        desc:"",
        children:[
          {component:"DecoFrameA2",counter:369,config:{
          }},
          {component:"DecoFrameA2",icon:"i carbon:bat",config:{
            decorationAlt:true,
            glow:false,
          }},
          {component:"DecoFrameA2",icon:"i carbon:bat",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameA2",icon:"i carbon:bat",config:{
            border:false,
            scale:1.5,
            backgroundOpacity:.5
          }},
  
          {component:"DecoFrameA2",counter:369,config:{
            directionAlt:true,
          }},
          {component:"DecoFrameA2",icon:"i carbon:bat",config:{
            directionAlt:true,
            decorationAlt:true,
            glow:false,
          }},
          {component:"DecoFrameA2",icon:"i carbon:bat",config:{
            directionAlt:true,
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameA2",icon:"i carbon:bat",config:{
            directionAlt:true,
            border:false,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
  
      {name:"DecoFrameA3",
        desc:"",
        children:[
          {component:"DecoFrameA3",counter:369,config:{
          }},
          {component:"DecoFrameA3",icon:"i carbon:add-comment",config:{
            decorationAlt:true,
            glow:false,
          }},
          {component:"DecoFrameA3",icon:"i carbon:add-comment",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameA3",icon:"i carbon:add-comment",config:{
            border:false,
            scale:1.5,
            backgroundOpacity:.5
          }},
          
          {component:"DecoFrameA3",counter:369,config:{
            directionAlt:true,
          }},
          {component:"DecoFrameA3",icon:"i carbon:add-comment",config:{
            directionAlt:true,
            decorationAlt:true,
            glow:false,
          }},
          {component:"DecoFrameA3",icon:"i carbon:add-comment",config:{
            directionAlt:true,
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameA3",icon:"i carbon:add-comment",config:{
            directionAlt:true,
            border:false,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
  
  
      {name:"DecoFrameB1",
        desc:"",
        children:[
          {component:"DecoFrameB1",counter:369842,config:{
          }},
          {component:"DecoFrameB1",icon:"i carbon:manage-protection",config:{
            glow:false,
          }},
          {component:"DecoFrameB1",icon:"i carbon:manage-protection",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameB1",icon:"i carbon:manage-protection",config:{
            decorationAlt:true,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
      {name:"DecoFrameB2",
        desc:"",
        children:[
          {component:"DecoFrameB2",counter:369842,config:{
          }},
          {component:"DecoFrameB2",icon:"i carbon:notification",config:{
            glow:false,
          }},
          {component:"DecoFrameB2",icon:"i carbon:notification",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameB2",icon:"i carbon:notification",config:{
            decorationAlt:true,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
      {name:"DecoFrameB3",
        desc:"",
        children:[
          {component:"DecoFrameB3",counter:369842,config:{
          }},
          {component:"DecoFrameB3",icon:"i carbon:mixed-rain-hail",config:{
            glow:false,
          }},
          {component:"DecoFrameB3",icon:"i carbon:mixed-rain-hail",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameB3",icon:"i carbon:mixed-rain-hail",config:{
            decorationAlt:true,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
      {name:"DecoFrameB4",
        desc:"",
        children:[
          {component:"DecoFrameB4",counter:369842,config:{
          }},
          {component:"DecoFrameB4",icon:"i carbon:center-circle",config:{
            glow:false,
          }},
          {component:"DecoFrameB4",icon:"i carbon:center-circle",config:{
            backgroundColor:$c.aql8,
            glowColor:$c.cyl3,
            textColor:$c.cyl5,
            decorationColor:[$c.yel3,$c.rel3]
          }},
          {component:"DecoFrameB4",icon:"i carbon:center-circle",config:{
            decorationAlt:true,
            scale:1.5,
            backgroundOpacity:.5
          }},
        ]
      },
    ]
  })
  const [cfg]=state.radioCurrent
 
  return (
    <div className="demo-decoFrame demo-deco">
     
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
                    <div className="decoFrame-item" key={subIndex}>
                      {
                        <DecoFrameComponent icon={subItem.icon} counter={subItem.counter} name={subItem.component} config={subItem.config} />
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
  DecoFrameA1,
  DecoFrameA2,
  DecoFrameA3,
  DecoFrameB1,
  DecoFrameB2,
  DecoFrameB3,
  DecoFrameB4,
}

const DecoFrameComponent=({counter,icon,name,config}:ISlotCompProcess)=>{
  const ConponentCurrent=components[name]
  console.log("icon,name",icon,counter);
  
  const ChildrenInner=()=>{
    if(icon){
      return <i className={icon}></i>
    }else if(counter){
      return (
        <div className="digit-num-wrap">
          <FlipNumbers height={32} width={24} color={$c.cyl3} numberStyle={{fontFamily:"en0"}} play perspective={1000} numbers={counter.toString()} duration={2}/>
        </div>
      )
    }else{
      return <></>
    }
  }

  return <ConponentCurrent config={config}>
    <ChildrenInner/>
  </ConponentCurrent>
}
