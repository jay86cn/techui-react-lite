import {useState} from "react"
import FlipNumbers from 'react-flip-numbers';
import "../../less/map-counter.less"
import {$c} from "techui-react-lite"
export default ()=>{
  const [data]=useState([
    {name:"Software Sales",icon:"i carbon:ibm-z-cloud-mod-stack",num:13694,unit:"Yuan",plus:218},
    {name:"hardware Sales",icon:"i carbon:chip",num:14558,unit:"yuan"},
    {name:"Technical Services",icon:"i carbon:user-speaker",num:3962,unit:"Yuan",plus:462},
    {name:"Security Service",icon:"i carbon:rule",num:5302,unit:"Yuan",plus:775},
  ])
  
  return (
    <div className="map-counter-alt-wrap">
      {data.map((item, index) => (
        <div className="counter-item" key={index}>
          <i className={'icon ' + item.icon}></i>
          <div className="name">{item.name}</div>
          {/* <span className="unit">({item.unit})</span> */}
          <div className="content">
            <span className="num">
              <FlipNumbers height={24} width={16} color={$c.bll5} numberStyle={{fontFamily:"en0",textAlign:"left"}} play perspective={1000} numbers={item.num.toString()} duration={5}/>
              <span className="plus" style={{ display: item.plus ? 'inline' : 'none' }}>
                +{item.plus}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}