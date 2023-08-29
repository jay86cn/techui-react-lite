
import ChartBar from "./portlet/chart-bar"
import ChartLine from "./portlet/chart-line"

export default ()=>{
  return (
    <div className="layout">
      <div style={{width:"600px",height:"300px"}}>
        <ChartBar/>
      </div>
      <div style={{width:"600px",height:"300px"}}>
        <ChartLine/>
      </div>
    </div>
  )
}