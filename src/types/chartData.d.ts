interface ChartSeries {
  
}

interface ChartConfig {
  inited: boolean;
  data: {
    legend?: string[];
    xAxis?: string[];
    yAxis?: string[];
    radius?:string[];
    position?:string[][];
    colors: string[];
    values: number[][]|number[];
  };
  option: EChartsOption;
  counter?:{
    title:string;
    value:number;
  }
}