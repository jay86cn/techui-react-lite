import {useState} from "react"
import FlipNumbers from 'react-flip-numbers';
import ChartMiniLine from './chart-miniLine';
import "../../less/map-counter.less"
import {$c} from "techui-react-lite"
export default ()=>{
  const [data]=useState([
    {name:"Software sales",num:394,unit:"$",color:$c.rel3},
    {name:"Hardware sales",num:42558,unit:"$",color:$c.yel3},
    {name:"Technology services",num:50262,unit:"$",color:$c.cbl3},
    {name:"Security Services",num:83214,unit:"$",color:$c.cbl3},
  ])
  
  return (
    <div className="map-counter-wrap">
      {data.map((item, index) => (
        <div className="counter-item" key={index}>
          <div className="content">
            <div className="num">
            <FlipNumbers height={20} width={12} color={item.color} numberStyle={{fontFamily:"impact"}} play perspective={1000} numbers={item.num.toString()} duration={5}/>
            </div>
          </div>
          <div className="name">
            {item.name} 
            {/* <span className="unit">({item.unit})</span> */}
          </div>
          <ChartMiniLine color={item.color}/>
        </div>
      ))}
    </div>
  )
}