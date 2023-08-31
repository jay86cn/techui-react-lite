import {DecoFrameA2,$c} from "techui-react-lite"
import FlipNumbers from 'react-flip-numbers';
import "../less/counter-grid.less"
export default ()=>{
  let arry= [
    {title:"Software Sales", icon: "i carbon:ibm-z-cloud-mod-stack", unit: "$10K", total: "1874"},
    {title:"Hardware Sales",icon:"i carbon:chip",unit:"$10K",total:"3276"},
    {title:"Technical Services",icon:"i carbon:user-speaker",unit:"$10K",total:"315"},
    {title:"Security Service",icon:"i carbon:rule",unit:"$10K",total:"769"},
    {title:"Total Expenses",icon:"i carbon:airline-digital-gate",unit:"$10K",total:"23769"},
  ]
  const decoFrameConfig={
    directionAlt: true,
    scale:.8
  }
  
  return (
    <div className="dashboardB-counterGrid">
      {arry.map((item, index) => (
        <div className="content-wrap" key={index}>
          <DecoFrameA2 config={decoFrameConfig}>
            <i className={`${item.icon} icon`}></i>
          </DecoFrameA2>
          <div className="numbers">
          <FlipNumbers height={32} width={24} color={$c.cyl3} numberStyle={{fontFamily:"en0"}} play perspective={1000} numbers={item.total} duration={5}/>
          </div>
          <div className="block-title">
            {item.title} <span className="unit">{item.unit && `(${item.unit})`}</span>
          </div>
        </div>
      ))}
    </div>
  )
}