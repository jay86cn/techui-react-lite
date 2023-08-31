import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"
// import { EChartsOption } from 'echarts';

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      legend:['income', 'expenditure'],
      yAxis:['Business 1', 'Business 2', 'Business 3', 'Business 4', 'Business 5', 'Business 6'],
      colors:[$c.cbl4,$c.bll5,],
      values:[
        [320, 302, 341, 374, 390, 450],
        [-120, -132, -101, -134, -190, -230],
      ],
    },
    option:{}
  })
  
  const processData=()=>{
    let {legend,colors,yAxis,values}=state.data,
        processedData:ChartSeries[]=[]
    legend?.forEach((_item,i)=>{
      processedData.push({
        name: legend&&legend[i],
        type: 'bar',
        barWidth:10,
        stack: 'Total',
        label: {
          color:"#fff",
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle:{
          color: $c.fade(colors[i],.9),
          borderRadius: 3
        },
        data: values[i]
      })
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
      pre.option.yAxis.data=yAxis
      pre.option.legend.data=legend
    })
   
  }

  const processOption=()=>{
    setState((pre)=>{
      pre.option={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
        },
        legend: {
          left: '20',
          top: '10',
        },
        grid: {
          left: '5%',
          right: '10%',
          bottom: '8%',
          top: "25%",
          containLabel: true
        },
        xAxis: { 
          type: 'value',
          axisLabel: {
            align: 'center',
            interval:0,
          }
        },
        yAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            formatter: '{value}',
            align: 'right'
          }
        }
      }
    })
    processData()
  }

  useEffect(()=>{
    processOption();
  },[])

  return (state.inited&&<EchartInit config={state.option}/>)
}

