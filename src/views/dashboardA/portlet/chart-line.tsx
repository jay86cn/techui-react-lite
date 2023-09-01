import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"
import * as echarts from 'echarts';
// import { EChartsOption } from 'echarts';

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      legend:['Software', 'hardware'],
      xAxis:['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
      colors:[$c.aql4,$c.bll5,$c.ipl3,$c.cbl3,],
      values:[
        [ 230, 210,220,179,123, 120, 132, 101,168, 181, 134, 126, 134, 190, ],
        [ 301, 334, 390, 330,300,240,235, 210, 187, 212, 278, 220, 320, 302,],
      ],
    },
    option:{}
  })
  
  const processData=()=>{
    let {legend,colors,xAxis,values}=state.data,
        processedData:ChartSeries[]=[]
    legend?.forEach((_item,i)=>{
      processedData.push({
        name: legend&&legend[i],
        type: 'line',
        barWidth:15,
        label: {
          show: false,
          position: 'insideRight'
        },
        itemStyle:{
          color: colors[i],
          borderRadius: 5
        },
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: $c.fade(colors[i],.9)
          }, {
            offset: 0.8,
            color: $c.fade(colors[i],.1)
          }], false),
          shadowcolor: $c.fade(colors[i],.3),
          shadowBlur: 10
        },
        data: values[i]
      })
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
      pre.option.xAxis.data=xAxis
      pre.option.legend.data=legend
    })
   
  }

  const processOption=()=>{
    setState((pre)=>{
      pre.option={
        update:false,
        tooltip: {
          trigger: 'axis',
          axisPointer: { 
            type: 'shadow'
          }
        },
        legend: {
          show:true,
          data: [],
          top:"5",
          right:10,
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: "15%",
          containLabel: true
        },
        yAxis: {
          type: 'value',
          axisLabel: {align: 'right' }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLabel: { interval:0, align: 'center' }
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

