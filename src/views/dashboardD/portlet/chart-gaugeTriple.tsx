import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"
// import { EChartsOption } from 'echarts';

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      legend:['Dev Task','Prod Task','Sales Task'],
      colors:[$c.aql4, $c.cyl5,$c.cbl4],
      values:[72,14,36],
      radius:["60%","75%","60%"],
      position:[
        ['17%', '55%'],
        ['50%', '55%'],
        ['83%', '55%'],
      ],
    },
    option:{}
  })
  
  const processData=()=>{
    let {legend,colors,values,radius,position}=state.data,
        processedData:ChartSeries[]=[];
    legend?.forEach((_item,i)=>{
      processedData.push({
        type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      center: position&&position[i],
      radius: radius&&radius[i],
      pointer: { show: false },
      title: { fontSize: 14 },
      itemStyle: {
        color: colors[i],
        shadowColor: colors[i],
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {}
      },
      detail: {
        width: 50,
        height: 14,
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 0,
        formatter: function (value:number) {
          return '{value|' + value.toFixed(0) + '}{unit|%}';
        },
        rich: {
          value: { fontSize: 24, color:$c.bk, fontWeight: 'bolder'},// color: '#999',
          unit: { fontSize: 12, color:$c.bk,}
        }
      },
      axisLine: {
        lineStyle: {color: [[1, $c.fade(colors[i],.3)]], width:10 }
      },
      splitLine: { show: false, distance: 0, length: 10 },
      axisTick: { show: false },
      axisLabel: { show: false, distance: 50 },
      data:[
        {
          value: values[i],
          name: legend&&legend[i],
          title: { color:$c.bk, offsetCenter: ['0%', '30%'] },
          detail: { valueAnimation: true, offsetCenter: ['0', '-30%'] }
        }
      ],
      })
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
    })
   
  }

  const processOption=()=>{
    setState((pre)=>{
      pre.option={
        update:false,
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

