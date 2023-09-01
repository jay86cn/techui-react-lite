import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"
import icons from "./icons"
export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      xAxis: ['Software', 'Hardware', 'Service', 'Security', 'Advertising', 'Patent', 'Licensing', 'Investment'],
      colors:[$c.aql4,$c.cbl4,$c.aql3,],
      values: [23, 40, 15, 12, 9, 7, 12, 5],
      symbolSize:[
        [20, 20],
        [18, 20],
        [18, 20],
        [18, 20],
        [20, 14],
        [16, 20],
        [20, 20],
        [20, 20],
      ]
    },
    option:{},
  })
  
  const processData=()=>{
    let {xAxis,values,symbolSize}=state.data,
        processedData:ChartSeries[]=[],
        subData:{
          value:number,
          symbol:string;
          symbolSize:number[]
        }[]=[]
    
    values.forEach((item,i)=>{
      subData.push({
          value: item as number,
          symbol: icons['svg'+i],
          symbolSize:symbolSize![i]
        })
    })
    processedData.push({
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '-130%',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        opacity: 0.5
      },
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      },
      data: values,
      z: 10
    },{
      name: 'glyph',
      type: 'pictorialBar',
      barGap: '-100%',
      symbolPosition: 'end',
      symbolSize: 50,
      symbolOffset: [0, '-120%'],
      data: subData
    }
    )
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
      pre.option.xAxis.data=xAxis
    })
  }

  const processOption=()=>{
    let {colors}=state.data
    setState((pre)=>{
      pre.option={
        update:false,
        title:{ text:"Unit: $10K", right:0, top:0, textStyle:{ fontSize:16, fontWeight:"normal" }, },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params:any) {
            return params[0].name + ': ' + params[0].value;
          }
        },
        grid: {
          left: '5%',
          right: '8%',
          bottom: '8%',
          top: "25%",
          containLabel: true
        },
        yAxis: {
          type: 'value',
          splitNumber: 3,
          axisLabel: {
            show:false
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: [],
          axisTick: { show: false },
          axisLine: { show:false, },
          splitLine: { show:false, },
          axisLabel: {
            align: 'center'
          }
        },
        color:colors,
        series: []
      }
    })
    processData()
  }

  useEffect(()=>{
    processOption();
  },[])
  const chartClick=(params:object)=>{
    console.log("params--",params);
  }
  return (state.inited&&<EchartInit chartClick={chartClick} config={state.option}/>)
}

