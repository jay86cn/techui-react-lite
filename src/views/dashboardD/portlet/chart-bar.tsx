import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"
// import { EChartsOption } from 'echarts';

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      legend:['本地視頻會議', '異地視頻會議'],
      xAxis:['十二月', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月'],
      colors:[$c.bll4,$c.aql4,$c.ipl3,$c.cbl3,],
      values:[
        [235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330],
        [68, 121, 34, 56, 23, 120, 132, 101, 134, 90, 230, 210]
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
        type: 'bar',
        barWidth:15,
        label: {
          show: false,
          position: 'insideRight'
        },
        itemStyle:{
          color: colors[i],
          borderRadius: 5
        },
        data: values[i]
      })
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
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          //show:false,
          data: [],
          top:"5",
          right:60,
        },
        toolbox: {
          feature: {
            magicType: { type: ['line', 'bar'] }
          },
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
          axisLabel: { align: 'right' }
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: { align: 'center' }
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

