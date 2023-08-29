///<reference path="./demo.d.ts" />
import {useState,useEffect} from "react"
import {TechBorderA1,TechBorderA2,TechBorderB1,TechBorderB2,TechBorderB3,TechBorderB4,$c} from "techui-react-lite";
import RadioGroup from "./common/radioGroup"
import "./less/demo-techBorder.less"

export default ()=>{
  const [state,setState]=useState<IDemoState>({
    show:false,
    componentGroup:[],
    radioCurrent:["4","short","cfgOn"],
    radioGroup:[
      [
        {title: "Columns 3", label: "3"},
        {title: "Columns 4", label: "4"},
      ],
      [
        {title: "High", label: "high"},
        {title: "Short", label: "short"},
      ],
      [
        {title: "Config Show", label: "cfgOn"},
        {title: "Config Hide", label: "cfgOff"},
      ]
    ]
  })
  const [col,height,cfg]=state.radioCurrent
  const initBorderConfig=()=>{
    let borders:ICompGroup[]=[
      {name:"TechBorderA1",children:[
        {component:"TechBorderA1",config:{}},
        {component:"TechBorderA1",config:{
          rotate:'x',
          decorationAlt:true
        }},
        {component:"TechBorderA1",config:{
          rotate:'y',
        }},
        {component:"TechBorderA1",config:{
          rotate:'z',
        }},
        {component:"TechBorderA1",config:{
          title:"Test Title",
          titleWidth:100,
        }},
        {component:"TechBorderA1",config:{
          title:"Test Long Title",
          decorationAlt:true,
          rotate:'x'
        }},
        {component:"TechBorderA1",config:{
          title:"Test Long Long Title",
          titleWidth:190,
          decorationAlt:true,
          rotate:'y'
        }},
        {component:"TechBorderA1",config:{
          title:"Test Title",
          titleWidth:100,
          rotate:'z'
        }},
  
      //---------------- techBorderA1 other
        {component:"TechBorderA1",config:{
          borderWidth:3,
        }},
        {component:"TechBorderA1",config:{
          component:false,
        }},
        {component:"TechBorderA1",config:{
          title:"Test Title",
          titleWidth:100,
          decoration:false,
          glow:true,
        }},
        {component:"TechBorderA1",config:{
          scale:.8,
          glow:true,
          glowRange:20
        }},
      ]},
      
      {name:"TechBorderA2",children:[
        {component:"TechBorderA2",config:{
          decorationColor:[$c.bll3,$c.orl3],
          title:"No.1",
        }},
        {component:"TechBorderA2",config:{
          decorationColor:[$c.bll3,$c.cbl5],
          title:"No.2",
          rotate:'x'
        }},
        {component:"TechBorderA2",config:{
          decorationColor:[$c.bll3,$c.rel4],
          title:"No.1",
          rotate:'y'
        }},
        {component:"TechBorderA2",config:{
          title:"No.15",
          rotate:'z'
        }},
        {component:"TechBorderA2",config:{
          borderWidth:3,
          title:"No.15",
        }},
        {component:"TechBorderA2",config:{
          component:false,
          decoration:false,
          title:"No.15",
        }},
        {component:"TechBorderA2",config:{
          glow:true,
          scale:.9,
          title:"No.15",
        }},
      ]},
  
      {name:"TechBorderB1",children:[
        {component:"TechBorderB1",config:{
        }},
        {component:"TechBorderB1",config:{
          borderWidth:3,
          bdFilter:true,
        }},
        {component:"TechBorderB1",config:{
          component:false
        }},
        {component:"TechBorderB1",config:{
          glow:true,
          scale:.9,
          decoration:false,
        }},
      ]},
      
      {name:"TechBorderB2",children:[
        {component:"TechBorderB2",config:{
          dur:3
        }},
        {component:"TechBorderB2",config:{
          rotate:'x',
          borderWidth:3,
          ani:false,
          bdFilter:true,
        }},
        
        {component:"TechBorderB2",config:{
          decorationColor:[$c.cyl3,$c.rel5],
          component:false,
          dur:3
        }},
        {component:"TechBorderB2",config:{
          scale:.9,
          decoration:false,
          glow:true,
          dur:3
        }},
      ]},
      
  
      {name:"TechBorderB3",children:[
        {component:"TechBorderB3",config:{
        }},
        {component:"TechBorderB3",config:{
          rotate:'x',
          borderWidth:3,
          bdFilter:true,
        }},
        {component:"TechBorderB3",config:{
          rotate:'y',
          decoration:false,
          decorationAlt:true
        }},
        {component:"TechBorderB3",config:{
          scale:.9,
          rotate:'z',
          glow:true,
          decoration:false,
        }},
      ]},
  
      //---------------- aYinTechBorderB4
      {name:"TechBorderB4",children:[
        {component:"TechBorderB4",config:{
        }},
        {component:"TechBorderB4",config:{
          borderWidth:3,
          bdFilter:true,
        }},
        {component:"TechBorderB4",config:{
          component:false
        }},
        {component:"TechBorderB4",config:{
          scale:.9,
          glow:true,
          decoration:false
        }},
      ]},
    ]//borders list end
  
    borders.forEach((itemG)=>{
      itemG.children.forEach((item)=>{
        item.config.opacity=.7
      })
    })
    setState((pre)=>({
      ...pre,
      componentGroup:borders
    }))
  }
  
  useEffect(()=>{
    initBorderConfig()
  },[])

  
 
  return (
    <div className="demo-techBorder demo-deco">
     
      <div className="border-toggle">
        <RadioGroup radioCurrent={state.radioCurrent} radioGroup={state.radioGroup} setRadio={setState}/>
      </div>
      <div className="deco-wrap" v-if="show">
        <div className="deco-intro">
          <div className="intro">Intro ：</div>
          <div className="content">
            <p>Inspired by the @jiaminghi/data-view open source component, the following tech-style borders were designed and developed by aYin. </p>
            <p>The tech style border uses dynamic SVG nodes with an adaptive process that is equivalent to the iterative computation of SVG nodes. </p>
            <p>Includes several configuration items, and the style is customizable. The full version of the style follows the system theme switch, the lite version has no theme functionality. </p> 
          </div>
        </div>
        {
          state.componentGroup.map((item,index)=>(
            <div className="deco-group" key={index}>
              <div className="group-name">
                <span className="title">{item.name}</span>
                {/* <span className="subTitle">{item.subTitle}</span>
                <span className="desc">{item.desc}</span>  */}
              </div>
              <div className="group-content" style={{gridTemplateColumns:`repeat(${col}, 1fr)`}}>
                {
                  item.children.map((subItem,subIndex)=>(
                    <div className={`border-item border-${height}`} key={subIndex}>
                      {
                        <BorderComponent config={subItem.config} name={subItem.component}>
                          {cfg=="cfgOn"?<div className="config-params">{JSON.stringify(subItem.config, null, 2)}</div>:<></>}
                        </BorderComponent>
                      }
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
  TechBorderA1,
  TechBorderA2,
  TechBorderB1,
  TechBorderB2,
  TechBorderB3,
  TechBorderB4,
}

const BorderComponent=({children,name,config}:ISlotCompProcess)=>{
  const ComponentCurrent=components[name]
  return <ComponentCurrent config={config}>{children}</ComponentCurrent>
}
