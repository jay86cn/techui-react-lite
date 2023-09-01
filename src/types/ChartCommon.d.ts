interface ChartSeries {
  
}

interface ChartConfig {
  inited: boolean;
  data: {
    title?:string;
    maxData?:number;
    legend?: string[];
    xAxis?: string[];
    yAxis?: string[];
    radius?:string[];
    position?:string[][];
    colors: string[];
    colorsD?: string[];
    values: number[][]|number[]|SubChartValue[];
    indicator?:EchartsIndicator[],
    symbolSize?:number[][]
  };
  option: EChartsOption;
  counter?:{
    title:string;
    value:number;
  }
}

interface SubChartValue {
  name:string;
  value?:number;
  children?:SubChartValue[]
}

interface EchartsIndicator{
  name:string;
  max?:number;
}

type EchartSeries=any;