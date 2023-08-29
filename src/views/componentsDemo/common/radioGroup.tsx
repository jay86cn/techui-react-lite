import "./radioGroup.less"

interface SlotProps{
  radioCurrent:string[],
  radioGroup:IRadioItem[][];
  setRadio:React.Dispatch<any>;
}
interface IRadioItem {
  title: string;
  label: string;
}
export default ({radioCurrent,radioGroup,setRadio}:SlotProps)=>{
  const radioChange=(radio:IRadioItem,index:number)=>{
    setRadio((pre:any)=>{
      let RC=radioCurrent;
      RC[index]=radio.label
      let processed={
        ...pre,
        radioCurrent:RC
      }
      return processed
    })
  }

  return (
    <div className="radioGroup-wrap">
      {radioGroup.map((item,index)=>(
        <div className="radio-inner" key={index}>
          {item.map((radio,i)=>(
            <div onClick={()=>{radioChange(radio,index)}} className={`radio-item ${radio.label==radioCurrent[index]&&'active'}`} key={i}>{radio.title}</div>
          ))}
        </div>
      ))}
    </div>
  )
}