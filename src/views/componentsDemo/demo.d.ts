interface IDemoState{
  show:boolean;
  componentGroup:ICompGroup[];
  radioCurrent:string[],
  radioGroup:IRadioItem[][];
}

interface ICompGroup{
  name:string;
  desc?:string;
  children:ICompChild[];
}
interface ICompChild{
  component:string;
  title?:string;
  icon?:string;
  counter?:number;
  text?:string;
  class?:string;
  panelTitle?:string;
  config:IConfig;
}


interface IConfig{
  [key: string]: any;
}

interface IRadioItem {
  title: string;
  label: string;
}

interface ISlotCompProcess{
  children?:string|JSX.Element;
  name:string;
  counter?:number;
  icon?:string;
  className?:className;
  panelTitle?:string;
  text?:string;
  config:IConfig;
}
