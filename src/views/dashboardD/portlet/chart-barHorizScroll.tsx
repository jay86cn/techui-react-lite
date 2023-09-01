import { useEffect } from 'react'
import {useImmer} from "use-immer"
import {EchartInit,timer,$c} from "techui-react-lite"
const base64Img="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg=="
// import { EChartsOption } from 'echarts';

export default ()=>{
  const [state, setState] = useImmer<ChartConfig>({
    inited:false,
    data:{
      yAxis:['Task A', 'Task B', 'Task C', 'Task Longer Name', 'Task E', 'Task F', 'Task G', 'Task H', 'Task I' ],
      colors:[$c.cyl4,$c.orl5,$c.rel5],
      values:[69, 96, 35,26, 96, 32 ,52 ,22 ,72]
    },
    option:{}
  })
  
  const fillArr=()=>{
    return (new Array(state.data.values.length)).fill(100);
  }
  
  const getSymbolData=(data:number[])=>{
    let arr = [];
    for (var i = 0; i < data.length; i++) {
      arr.push({
        value: data[i],
        symbolPosition: 'end'
      })
    }
    return arr;
  }

  const processData=()=>{
    let {yAxis,values}=state.data
    
    setState((pre)=>{
      pre.inited=true;
      pre.option.series[0].data=values
      pre.option.series[1].data=fillArr()
      pre.option.series[2].data=getSymbolData(values as number[])
      pre.option.yAxis.data=yAxis
    })

    dataScroll()
  }
  const processOption=()=>{
    const fontColor=$c.bk
    setState((pre)=>{
      pre.option={
        update:false,
        title: {
          show:false,
          // text: '实时流速图2',
          textStyle:{
            color:$c.cbl5,
            fontSize:16,
            fontWeight:"normal"
          },
        },
        grid: {
          top: '15%',
          left: '18%',
          right: '12%',
          bottom: '5%'
        },
        tooltip: {show: false},
        xAxis: {
          type: 'value',
          min: 0,
          max: 100,
          axisLine: {show: false},
          splitLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false}
        },
        dataZoom: {
          yAxisIndex: 0,
          show: false,
          type: "slider",
          startValue: 0,
          endValue: 5,
        },
        yAxis: {
          //show: false,
          type: 'category',
          inverse: true,
          splitLine: {show: false,},
          axisLine: {show: false},
          axisLabel: {
            show: true,
            interval: 0,
            margin: 10,
            color:fontColor,
            fontSize: 12,
            width:50,
            lineHeight:14,
            overflow:"break",
            fontWeight: 'normal',
          },
          axisTick: {show: false},
          data:[]
        },
        series: [
          {
            type: 'bar', 
            barWidth: '40%',
            animationDuration:2000,
            itemStyle: {
              borderWidth:0,
              borderRadius:10,
              color: {
                type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [{ offset: 0, color: $c.cyl8, }, { offset: 1, color: $c.cyl4, }]
              }
            },
            label: { show: false, },
            data: [],
            z: 0
          },
          {
            type: 'bar', 
            barWidth: '40%',
            barGap: '-100%',
            animation: false,
            itemStyle: {
              borderWidth: 0,
              borderRadius:5,
              color: 'rgba(0,202,255,0.2)'
            },
            label: {
              color:fontColor,
              show: true,
              position: ['101%', '20%'],
              fontSize: 14,
              fontWeight: 'normal',
              formatter: (params:any)=>{
                return ' ' + (state.data.values[params.dataIndex] ) + '%';
              }
            },
            data: [],
            z: 0
          }, 
          {
            type: 'pictorialBar',
            animation: true,
            // animationThreshold: 3000 ,
            animationDuration: 3000 ,
            // animationDurationUpdate:500,
            symbol: base64Img,
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            itemStyle: {
              color: '#fff'
            },
            data: []
          },
        ]
      }
    })
    processData()
  }

  const dataScroll=()=>{
    timer.s("dataScrollBarHorizTest",()=>{
      setState((pre)=>{
        let {values}=pre.data
        let {dataZoom}=pre.option
        // console.log("values",dataZoom.endValue ,values.length);
        if (dataZoom.endValue == values.length ) {
          dataZoom.endValue = 5;
          dataZoom.startValue = 0;
        }else{
          dataZoom.endValue ++;
          dataZoom.startValue ++;
        }
        pre.option.update=true
        dataScroll()
      })
    },5000)
    
  }

  useEffect(()=>{
    setState((pre)=>{
      pre.option.update=false;
    })
  },[state.option.update])


  useEffect(()=>{
    processOption();
  },[])

  return (state.inited&&<EchartInit config={state.option}/>)
}

