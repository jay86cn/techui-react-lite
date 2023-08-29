import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      legend:['Software','Hardware','Services','Security','Advertising'],
      colors:[$c.bll5,$c.inl3,$c.aql3,$c.yel3,$c.orl3,$c.rel3],
      values:[325,252,323,183,120,43]
    },
    option:{},
    counter:{title: "Total Cost",value:1723},
  })
  
  const processData=()=>{
    let {legend,colors,values}=state.data,
        processedData:ChartSeries[]=[]
    legend?.forEach((_item,i)=>{
      processedData.push({
        value:values[i],
        name:legend![i],
        itemStyle:{
          color:colors[i]
        }
      })
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series[0].data=processedData
      pre.option.legend.data=legend
    })
  }

  const processOption=()=>{
    setState((pre)=>{
      pre.option={
        update:false,
        title:{
          show:true,
          text:"Total Cost",
          subtext: '1723',
          left:'29%',
          top:'38%',
          textAlign: 'center', 
          textStyle:{
            fontSize:16,
            fontWeight:"bold",
            lineHeight:30
          },
          subtextStyle:{
            fontSize:32,
            color:$c.cyl3,
            fontFamily:"impact",
            lineHeight:28
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',//horizontal
          show:true,
          right: '20',
          top:'22%',
          data:[],
          formatter:(name:string)=>{
            let target;
            for(let i=0;i<state.data.values.length;i++){
              if(state.data.legend![i]==name){
                target=state.data.values[i]
              }
            }
            return "{a|"+name+"}"+" "+"{b|"+target+"}"
          },
          textStyle:{
            rich:{
              a:{
                  fontSize:14,
                  color:$c.bll5,
                  padding:10
              },
              b:{
                  fontSize:16,
                  color:$c.cyl5
              }
            }
          }
        },
        series: [
          {
            name:'数据类别',
            type:'pie',
            radius: ['40%', '65%'],
            center: ['30%', '50%'],
            //roseType: 'radius',
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'outside',
            },
            itemStyle: {
                borderRadius: 10,
                borderColor: $c.bll9,
                borderWidth: 5
            },
            emphasis: {
              label:{
                show: false,
                fontSize: '20',
                color:$c.gyd5,
              }
            },
            labelLine: {
              show: false
            },
            data:[]
          }
        ]
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

