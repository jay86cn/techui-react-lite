interface MapState{
  map:{};
  colors:{
    pin_A:string;
    pin_B:string;
    font:string;
    fontHov:string;
    mapBG_A:string;
    mapBG_B:string;
    mapBG_hov_A:string;
    mapBG_hov_B:string;
    mapBD_A:string;
    mapBD_B:string;
    mapGlow:string;
    visualMap:[string,string];
  };
  chartData:{
    geoJson:GeoJson;
    maxData:number;
    minData:number;
    maxPin:number;
    minPin:number;
    layoutCenter:[string,string];
    layoutSize:string;
    visualMapPos:{
      right:string;
      bottom:string
    }
  };
  chartOption:any;
  clickData:{
    show:false;
    area:string;
    data:number;
    info:string;
    x:number;
    y:number
  }
}

interface MapData{
  name:string;
  value:(number | string)[];
  cityCode:number;
}
interface GeoJson{
  code:number;
  features:any[];
  name:string;
  type:string;
}