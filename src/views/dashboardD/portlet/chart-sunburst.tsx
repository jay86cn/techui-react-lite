import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,$c} from "techui-react-lite"

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      title:"业务利润占比",
      colors:[$c.aql7, $c.cyl5],
      maxData:300,
      values:[
        {
          name: 'software',
          children: [
            {
              name: 'Product',value:123,
              children: [
                { name: 'GIS System', value: 49 },
                { name: 'Visualization', value: 25},
                { name: 'Financial System', value: 11 }
              ]
            },
            {
              name: 'Customization',value:90,
              children: [ 
                { name: 'Business System', value: 35 }, 
                { name: 'Portal', value:15 } 
              ]
            }
          ]
        },
        {
          name: 'Hardware', children: [
            {
              name: 'Servers',value:230, children: [ 
                { name: 'Entry Level', value: 43 }, 
                { name: 'Enterprise', value: 121 } 
              ]
            },
            {
              name: 'Network Devices',value:55, children: [ 
                { name: 'Security Gateway', value: 23 }, 
                { name: 'Router', value: 12 } 
              ]
            }
          ]
        }
      ],
    },
    option:{}
  })
  const fontColor=$c.wh, subFontColor=$c.cbl3

  const processData=()=>{
    let {values}=state.data,
        processedData:ChartSeries[]=[]
    processedData.push({
      type: 'sunburst',
      data: values,
      radius: [20, '80%'],
      center:['53%','50%'],
      itemStyle: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor:$c.wh,
      },
      label: {
        show: true,
        color:fontColor,
        fontSize: 12,
        rotate: 'tangential'//文字旋转
        // formatter: function (param) {
        //   return param.name+'\n'+param.value
        // }
      },
      emphasis: {
        label:{
          show: true,
          fontSize: '16',
          color:$c.wh,
          formatter: function (param:{name:string,value:number}) {
            return param.name+'\n'+param.value
          }
        }
      },
      levels: [{},]
    })
    setState((pre)=>{
      pre.inited=true;
      pre.option.series=processedData
    })
   
  }

  const processOption=()=>{
    setState((pre)=>{
      const {maxData,colors}=pre.data
      pre.option={
        update:false,
        title:{ 
          text:"Data unit:million Click on data to drill down",subtext:"", right:20, bottom:0, 
          textStyle:{ color:$c.bk, fontSize:12, fontWeight:"normal" }, 
        },
        visualMap: {
          type: 'continuous',
          left:10,
          bottom:40,
          min: 0,
          max: maxData,
          inRange: {
            color: colors
          },
          textStyle:{
            color:fontColor,
          },
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

