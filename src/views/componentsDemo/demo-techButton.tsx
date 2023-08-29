///<reference path="./demo.d.ts" />
import {useState} from "react"
import {TechButtonA1,TechButtonA2,TechButtonB1,TechButtonB2,$c} from "techui-react-lite";
import RadioGroup from "./common/radioGroup"
import "./less/demo-techButton.less"

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
      {name:"TechButtonA1",
        desc:"",
        children:[
          {component:"TechButtonA1",text:"buttonText",config:{ }},
          {component:"TechButtonA1",text:"buttonTextLongLong",config:{ }},
          {component:"TechButtonA1",class:"active",text:"buttonActive",config:{ }},
          {component:"TechButtonA1",class:"disabled",text:"buttonDisabled",config:{ }},
          {component:"TechButtonA1",text:"buttonCustom",config:{
            normal:{fc:$c.cyl5,bg:$c.aql8,bd:$c.aql5},
            hover:{fc:$c.rel7,bg:$c.orl6,bd:$c.orl4},
            decorationColor:[$c.wh,$c.rel3],
          }},
          {component:"TechButtonA1",text:"buttonScale",config:{
            decorationColorAlt:true,
            scaleAction:false,
            glow:false,
            scale:1.4
          }},
          
        ]
      },
      {name:"TechButtonA2",
        desc:"",
        children:[
          {component:"TechButtonA2",text:"buttonText",config:{}},
          {component:"TechButtonA2",text:"buttonTextLongLong",config:{ }},
          {component:"TechButtonA2",text:"buttonActive",class:"active",config:{ }},
          {component:"TechButtonA2",text:"buttonDisabled",class:"disabled",config:{ }},
          {component:"TechButtonA2",text:"buttonCustom",config:{
            normal:{fc:$c.cyl5,bg:$c.aql8,bd:$c.aql5},
            hover:{fc:$c.rel7,bg:$c.orl6,bd:$c.orl4},
            decorationColor:[$c.cyl3,$c.rel3],
          }},
          {component:"TechButtonA2",text:"buttonScale",config:{
            decorationColorAlt:true,
            scaleAction:false,
            scale:1.5,
            glow:false
          }},
  
        ]
      },
      
      {name:"TechButtonB1",
        desc:"",
        children:[
          {component:"TechButtonB1",text:"buttonText",config:{ }},
          {component:"TechButtonB1",text:"buttonTextLongLong",config:{
            borderWidth:5,
          }},
          {component:"TechButtonB1",class:"active",text:"buttonActive",config:{ }},
          {component:"TechButtonB1",class:"disabled",text:"buttonDisabled",config:{ }},
          {component:"TechButtonB1",text:"buttonCustom",config:{
            normal:{fc:$c.wh,bg:$c.aql8,bd:$c.aql5},
            hover:{fc:$c.rel7,bg:$c.orl6,bd:$c.orl4},
            decorationColor:[$c.aql3,$c.rel3],
          }},
          {component:"TechButtonB1",text:"buttonScale",config:{
            decorationColorAlt:true,
            scaleAction:false,
            decorationLength:19,
            glow:true,
            scale:1.4
          }},
  
        ]
      },
      
      {name:"TechButtonB2",
        desc:"",
        children:[
          {component:"TechButtonB2",text:"buttonText",config:{ }},
          {component:"TechButtonB2",text:"buttonTextLongLong",config:{
          }},
          {component:"TechButtonB2",text:"buttonActive",class:"active",config:{ }},
          {component:"TechButtonB2",text:"buttonDisabled",class:"disabled",config:{ }},
          {component:"TechButtonB2",text:"buttonCustom",config:{
            normal:{fc:$c.cyl5,bg:$c.aql8,bd:$c.aql5},
            hover:{fc:$c.wh,bg:$c.aql6,bd:$c.aql4},
            decorationColor:[$c.aql3,$c.acl3],
            decorationWidth:5
          }},
          {component:"TechButtonB2",text:"buttonScale",config:{
            decorationColorAlt:true,
            scaleAction:false,
            decorationWidth:5,
            glow:true,
            scale:1.3
          }},
          
          
          
        ]
      },
      
      
    ]
  })
  const [cfg]=state.radioCurrent
  const buttonTitle=[
    {label:"Normal",labelE:"Normal"},
    {label:"Long Text",labelE:"Long Text"},
    {label:"Active",labelE:"Active"},
    {label:"Disabled",labelE:"Disabled"},
    {label:"Custom style",labelE:"Custom style"},
    {label:"Scale",labelE:"Scale"},
  ]
  return (
    <div className="demo-techButton demo-deco">
     
      <div className="border-toggle">
        <RadioGroup radioCurrent={state.radioCurrent} radioGroup={state.radioGroup} setRadio={setState}/>
      </div>
      <div className="deco-wrap">
        <div className="deco-intro">
          <div className="intro">Intro ：</div>
          <div className="content">
            <p>Tech buttons, used in place of regular buttons on a page to give it a techy feel. </p>
            <p>This component class A was developed using dynamic SVG nodes. This component does not require adaptive functionality, but when setting its width, the SVG node will automatically calculate the positioning based on the title width. </p>
            <p>Includes several configuration items, such as width, zoom level, animation, etc. The style can be customized, please refer to the configuration items in the case below. The full version of the style follows the system theme switch, the lite version has no theme feature. </p>
          </div>
        </div>
        <div className="techButton-title">
          {buttonTitle.map((item, index) => (
            <div key={index} className="item">
              <p className="chs">{item.label}</p>
            </div>
          ))}
        </div>
        {state.componentGroup.map((item, index) => (
          <div key={index} className="deco-group">
            <div className="group-name">
              <span className="title">{item.name}</span>
              <span className="desc">{item.desc}</span>
            </div>
            <div className="group-content">
              {item.children.map((itemB, indexB) => (
                <div key={indexB} className="techButton-item">
                  <div className="button-wrap">
                    {
                      <ComponentProcess config={itemB.config} className={itemB.class?itemB.class:''} name={itemB.component}>
                        { itemB.text! }
                      </ComponentProcess>
                    }
                  </div>
                  {cfg=="cfgOn"?<div className="config-detail">{JSON.stringify(itemB, null, 2)}</div>:<></>}
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
  TechButtonA1,
  TechButtonA2,
  TechButtonB1,
  TechButtonB2,
}

const ComponentProcess=({children,name,config,className}:ISlotCompProcess)=>{
  const ComponentCurrent=components[name]
  return <ComponentCurrent config={config} className={className}>{children}</ComponentCurrent>
}
