import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,randomData,$c} from "techui-react-lite"
import * as echarts from 'echarts';

export default ({color}:{color:string})=>{
  const rdmData=randomData({ min:0, max:300, length:10, group:1 })
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      colors:[],
      legend:['埋深'],
      values:rdmData[0],
    },
    option:{}
  })
  
  const processData=()=>{
    let {xAxis,values}=state.data,
        processedData:ChartSeries[]=[]
    processedData.push({
      type: "line",
      symbolSize: 0,
      label: { show: false, },
      itemStyle:{
        color: $c.fade(color,.1),
        borderRadius: 3,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: $c.fade(color,.9)
        }, {
          offset: 0.8,
          color: $c.fade(color,.5)
        }], false),
        // shadowcolor: $c.fade(color,.3),
        // shadowBlur: 10
      },
      smooth: true,
      data: values
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
      pre.option.xAxis.data=xAxis
    })
   
  }

  const processOption=()=>{
    setState((pre)=>{
      pre.option={
        update:false,
        tooltip: {
          show:false,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
        yAxis:{
          type: 'value',
          axisLine: {show:false},
          splitLine: {show:false},
          axisLabel: {show:false}
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLine: {show:false},
          splitLine: {show:false},
          axisLabel: {show:false,}
        },
        series: []
      }
    })
    processData()
  }

  useEffect(()=>{
    processOption();
  },[])

  return (state.inited&&<EchartInit config={state.option}/>)
}