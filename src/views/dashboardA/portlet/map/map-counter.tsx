import FlipNumbers from 'react-flip-numbers';
import ChartMiniLine from './chart-miniLine';
import "../../less/map-counter.less"
import {$c} from "techui-react-lite"
export default ()=>{
  const counterList=[
    {name:"软件年盈利",num:394,unit:"万元",color:$c.rel3},
    {name:"硬件年盈利",num:42558,unit:"万元",color:$c.yel3},
    {name:"服务年盈利",num:50262,unit:"万元",color:$c.cbl3},
    {name:"安全年盈利",num:50262,unit:"万元",color:$c.cbl3},
  ]
  return (
    <div className="map-counter-wrap">
      {counterList.map((item, index) => (
        <div className="counter-item" key={index}>
          <div className="content">
            <div className="num">
            <FlipNumbers height={20} width={12} color={item.color} numberStyle={{fontFamily:"impact"}} play perspective={1000} numbers={item.num.toString()} duration={2}/>
            </div>
          </div>
          <div className="name">
            {item.name} <span className="unit">({item.unit})</span>
          </div>
          <ChartMiniLine color={item.color}/>
        </div>
      ))}
    </div>
  )
}