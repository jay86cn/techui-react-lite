import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"
// import { EChartsOption } from 'echarts';

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      legend:['Budget Allocation', 'Actual Expenses'],
      colors:[$c.bll5,$c.cyl5,],
      values:[
        [5000, 4300, 4800,4100, 4200, 5000],
        [4300, 4000, 3700, 4500, 5000,3000],
      ],
      indicator: [
        { name: 'Sales',max:5000},
        { name: 'Management', },
        { name: 'Technology', },
        { name: 'Service', },
        { name: 'R&D', },
        { name: 'Market',}
      ],
    },
    option:{}
  })
  
  const processData=()=>{
    let {legend,colors,values,indicator}=state.data,
        processedData:ChartSeries[]=[]
    legend?.forEach((_item,i)=>{
      processedData.push({
        name: legend![i],
        type: "radar",
        symbol: "circle",
        color:colors[i],
        symbolSize: 10,
        areaStyle: {
          color: $c.fade(colors[i],.4)
        },
        // itemStyle: {
        //   color: $c.fade(colors[i],.9),
        //   bordercolor: $c.fade(colors[i],.3),
        //   borderWidth: 10,
        // },
        lineStyle: {
          color: $c.fade(colors[i],.9),
          width: 2
        },
        data: [values[i]]
      })
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
      pre.option.legend.data=legend
      pre.option.radar.indicator=indicator
    })
  }
  
  const processOption=()=>{
    setState((pre)=>{
      pre.option={
        update:false,
        // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
        title:{
          text:"异常特征分布1",
          show:false,
          left:0,
          top:0,
          textStyle:{
            color:$c.cbl5, fontSize:16, fontWeight:"normal"
          },
        },
        tooltip: {
            show: true,
          trigger: "item"
        },
        legend: {
          show:true,
          right:15,
          top:15,
          width:50,
          data: []
        },
        radar: {
          center: ["50%", "53%"],
          radius: "80%",
          startAngle: 90,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["transparent"]
            }
          },
          axisLabel: {
            show: false,
            fontSize: 12,
          },
          axisLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              }
          },
          splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              }
          },
          // shape: 'circle',
          axisName: {
            // formatter: '{a|{value}}{abg|}\n{hr|}\n{b|1234}',
            // backgroundColor: '#eee',
            // borderColor: '#aaa',
            fontSize:14,
            borderWidth: 1,
            borderRadius: 0,
            // rich: {
            //   a: { color: '#00b7ee', lineHeight: 25, padding: [0, 0, 0, 8], height: 25, backgroundColor: '#fff', borderRadius: 0 },
            //   hr: { borderColor: '#aaa', width: '100%', borderWidth: 0.1, align: 'left', height: 1 },
            //   b: { color: '#333', lineHeight: 25, padding: [0, 0, 0, 8], height: 25, backgroundColor: '#fff', width: '100%', align: 'left', borderRadius: 0 },
            //   per: { color: '#eee', backgroundColor: '#ffffff', borderWidth: 0.5, borderRadius: 0, borderColor: '#fff', }
            // }
          },
          indicator: []
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

