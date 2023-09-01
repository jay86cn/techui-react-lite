import {TechBorderB3,$c} from "techui-react-lite"
import FlipNumbers from 'react-flip-numbers';
import "../less/counter-grid.less"
export default ()=>{
  let arry=[
    {title: "Software sales", icon: "i carbon:ibm-z-cloud-mod-stack", unit: "10,000 yuan", total: "1874"},
    {title:"Hardware sales",icon:"i carbon:chip",unit:"10,000 yuan",total:"3276"},
    {title:"Technical Services",icon:"i carbon:user-speaker",unit:"10,000 yuan",total:"315"},
    {title:"Security Service",icon:"i carbon:rule",unit:"10,000 yuan",total:"769"},
  ]
  const borderConfig=(index:number)=>{
    let rotate=""
    if(index==0){
      rotate="x";
    }else if(index==1){
      rotate="all";
    }else if(index==2){
      rotate="";
    }else if(index==3){
      rotate="y";
    }
    return {
      opacity: 0.7,
      // decoration: false,
      rotate
    }
  }
  return (
    <div className="dashboardA-counterGrid">
      {arry.map((item, index) => (
        <TechBorderB3 key={index} config={borderConfig(index)}>
          <div className="inner-content">
            <div className="block-title">
              {item.title} <span>{item.unit && `(${item.unit})`}</span>
            </div>
            <div className="total">
              <i className={`icon ${item.icon}`}></i>
              <div className="number">
              <FlipNumbers height={32} width={24} color={$c.cyl3} numberStyle={{fontFamily:"en0"}} play perspective={1000} numbers={item.total} duration={5}/>
              </div>
              {/* <DigitalTransform className="numbers" value={item.total} useGrouping={true} interval={3000} /> */}
            </div>
          </div>
        </TechBorderB3>
      ))}
    </div>
  )
}