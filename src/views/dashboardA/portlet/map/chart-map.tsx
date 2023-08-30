import {useEffect,useRef} from "react"
import {useImmer} from "use-immer"
import {$c,randomNumber,resizeAny} from "techui-react-lite"
import symbol from "./symbol.json"
import * as echarts from 'echarts';
import MapCounter from "./map-counter"

import {httpGetMap} from "@/api/api.js"
import "../../less/chart-map.less"
export default ()=>{
  const chartMap=useRef(null)
  const [state,setState]=useImmer<MapState>({
    map:{},
    colors:{
      pin_A:$c.cyl6,
      pin_B:$c.cbl6,
      font:$c.cbl3,
      fontHov:$c.wh,
      mapBG_A: $c.blA13,
      mapBG_B: $c.blA18,
      mapBG_hov_A: $c.cbA10,
      mapBG_hov_B: $c.blA15,
      mapBD_A: $c.cbA12,
      mapBD_B: $c.cbA13,
      mapGlow: $c.cbl7,
      visualMap:[$c.fade("cbA13",.7),$c.fade("blA19",.7)],
    },
    chartData:{
      geoJson:{
        code:0,
        features:[],
        name:"",
        type:""
      },
      maxData:1000,
      minData:0,
      maxPin:90,
      minPin:20,
      layoutCenter:['50%', '55%'],
      layoutSize:"80%",
      visualMapPos:{
        right:"26.5%",
        bottom:"5%"
      }
    },
    chartOption:{update:false},
    clickData:{
      show:false,
      area:"北京",
      data:325,
      info:"文字信息",
      x:120,
      y:120
    }
  })
  useEffect(()=>{
    httpGetMap("/maps/","shenyangEN.json").then((res)=>{
      console.log("mapRes",res);
      setState((pre)=>{
        pre.chartData.geoJson={
          ...pre.chartData.geoJson,
          code:0,
          name:"liaoningMap",
          ...res
        };
        console.log("pre.chartData.geoJson",pre.chartData.geoJson);
        // @ts-ignore
        echarts.registerMap("liaoningMap", pre.chartData.geoJson);
        getMapData(res)
      })
    })
  },[])


  const getMapData=(res:any)=>{
    let mapData:MapData[] = [],
        pointData:MapData[]=[] ,
        pinData:MapData[] = [], 
        circleData:MapData[] = [],
        warningData:MapData[] = [],
        dangerData:MapData[] = [], 
        sum = 0,
        topIndex=[12,8,6,7,11,14],warnIndex=[13,5],dangerIndex=[3];
    const {maxData}=state.chartData
    res.features.forEach((geo:any,i:number) => {
      if(geo.properties.name){
        let value = randomNumber(1,maxData/3)
        let maxValue = randomNumber(maxData/2,maxData)
        
        if(geo.properties.center){
          if(topIndex.includes(i)){
            let pin={
              name: geo.properties.name,
              value: [geo.properties.center[0], geo.properties.center[1], maxValue],
              cityCode: parseInt(geo.properties.adcode)
            }
            pinData.push(pin)
            pointData.push(pin)
          }else if(warnIndex.includes(i)){
            warningData.push({
              name: geo.properties.name,
              value: [geo.properties.center[0], geo.properties.center[1], 'warning',"区域数据触发异常告警"],
              cityCode: parseInt(geo.properties.adcode)
            })
          }else if(dangerIndex.includes(i)){
            dangerData.push({
              name: geo.properties.name,
              value: [geo.properties.center[0], geo.properties.center[1], 'danger',"区域数据触发危急告警"],
              cityCode: parseInt(geo.properties.adcode)
            })
          }else{
            if(value<100){ value=0 }
            let circle={
              name: geo.properties.name,
              value: [geo.properties.center[0], geo.properties.center[1], value],
              cityCode: parseInt(geo.properties.adcode)
            }
            pointData.push(circle)
            circleData.push(circle)
          }
          
        }
        sum += value
      }
    })
    const datas={
      mapData,
      pointData,
      pinData,
      circleData,
      warningData,
      dangerData,
      sum
    }
    processOption(datas)
  }

  const processOption=(datas:any)=>{
    const {colors}=state
    const {layoutCenter,layoutSize}=state.chartData
    let tempOption={
    
      geo:{
        type: 'map',
        map: "liaoningMap",
        roam: true,
        scaleLimit: {
          min: .5,
          max: 3
        },
        layoutCenter:layoutCenter,
        layoutSize:layoutSize,
        zlevel:1,
        label: {
          show: true,
          color:colors.font,
          fontSize: 12,
          formatter: (p: { name: string }) => {
            return p.name; 
          },
        },
        
        itemStyle: {
          borderColor:  new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
            { offset: 0, color: colors.mapBD_A }, 
            { offset: 1, color: colors.mapBD_B }
          ], false),
          borderWidth: 2,
          shadowColor: colors.mapGlow,
          shadowOffsetY: 0,
          shadowBlur: 10,
          areaColor: { x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: $c.fade(colors.mapBG_A,.5) }, 
              { offset: 1, color: $c.fade(colors.mapBG_B,.5) }
            ],
          },
        },
        select:{
          label: {
            show:true,
            color:colors.fontHov,
            fontSize: 14,
          },
          itemStyle: {
            areaColor: { x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: $c.lighten(colors.mapBG_hov_A,.2) }, 
                { offset: 1, color: $c.lighten(colors.mapBG_hov_B,.2) }
              ],
            },
          }
        },
        emphasis: {
          label: {
            color:colors.fontHov,
            fontSize: 14,
            show: true
          },
          itemStyle: {
            areaColor: { x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: $c.fade(colors.mapBG_hov_A,.5) }, 
                { offset: 1, color: $c.fade(colors.mapBG_hov_B,.5) }
              ],
            },
          }
        },
      },
      series: [ ]
    }
    
    processMapData(tempOption,datas)
  }


  const processMapData=(options:any,datas:any)=>{
    setState((pre)=>{
      pre.chartOption=options
      const {colors,chartData}=pre
      const {maxData,minData,maxPin,minPin}=chartData
      const {pointData, pinData, circleData, warningData, dangerData} =datas
      let mapD=[]
      mapD.push(
        {
          data: pointData,
          geoIndex: 0,
          type:'map',
        },
        {
          symbolSize: 5,
          label: {
            position: 'center',
            align:"center",
            show: false,
            color: colors.font,
            fontSize: 12,
            formatter: (para:any)=>{return para.data.name },
          },
          emphasis: {
            label: {
              show:false,
              fontSize: 14,
              color:colors.fontHov,
              fontWeight:"bold",
            }
          },
          symbolOffset: [0, 0],
          itemStyle: {
            color: '#fff'
          },
          name: 'light',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          data: pointData,
        },
        {
          type: 'scatter',
          symbol: 'circle',
          coordinateSystem: 'geo',
          symbolOffset: [0, 0],
          large:true,
          label: {
            show: false,
          },
          emphasis: {
            label: {
              fontSize: 14,
              color:colors.fontHov,
              fontWeight:"bold",
            }
          },
          itemStyle: {
            color: colors.pin_A,
          },
          symbolSize:20,
          data: circleData,
          zlevel: 2,
        },
        {
          type: 'scatter',
          symbol: 'pin',
          coordinateSystem: 'geo',
          symbolOffset: [0, 0],
          large:true,
          label: {
            show: true,
            position:"inside",
            align:"center",
            color: $c.wh,
            fontSize: 14,
            formatter: (p:any) => {
              if(p.data.value[2].toString().length>4){
                return (p.data.value[2]/10000).toFixed(0)+"万"
              }else{
                return p.data.value[2]
              }
            },
          },
          emphasis: {
            label: {
              fontSize: 18,
              color:colors.fontHov,
              fontWeight:"bold",
            }
          },
          itemStyle: {
            color:{
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: colors.pin_A }, 
                { offset: 1, color: colors.pin_B }
              ],
              global: false // 缺省为 false
            }
          },
          symbolSize: (val:any)=> {
            var a = (maxPin - minPin) / (maxData - minData);
            var b = maxPin - a * minData;
            b = maxPin - a * maxData;
            return a * val[2] + b * 1.3;
          },
          data: pinData,
          zlevel: 2,
        },
        {
          type: "scatter",
          symbol: symbol.icon,
          coordinateSystem: 'geo',
          symbolOffset: [0, -10],
          label: { show: false, },
          itemStyle: {
            color: {
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: $c.yel1}, 
                { offset: 1, color: $c.yel6}
              ],
              global: false
            },
          },
          symbolSize: 24,
          emphasis: { scale:1.5,},
          data: warningData,
          zlevel: 2,
        },
        {
          type: "scatter",
          symbol: symbol.icon,
          coordinateSystem: 'geo',
          symbolOffset: [0, -10],
          label: { show: false, },
          
          itemStyle: {
            color: {
              type: 'radial', x: 0.3, y: 0.3, r: 0.5,
              colorStops: [
                { offset: 0, color: $c.rel3}, 
                { offset: 1, color: $c.rel5}
              ],
              global: false
            },
          },
          symbolSize: 24,
          emphasis: { scale:1.5,},
          data: dangerData,
          zlevel: 2,
        }
        
      )
      pre.chartOption.series=mapD
      const echart=echarts.init(chartMap.current)
      echart.setOption(pre.chartOption,true);
      console.log("echarts",echart,pre.chartOption);
      resizeAny.o(chartMap.current!,()=>{
        echart.resize()
      })
    })
    
  }


  return (
    <div className="dashboardA-map map-wrap">
      <MapCounter/>
      <div ref={chartMap} className="full-map"></div>
    </div>
  )
}