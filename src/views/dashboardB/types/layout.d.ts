interface ISubCompSlot{
  item:IAreaItem;
}
interface IAreaItem{
  id:string;
  title:string;
  hideTitle?:boolean;
  component:string;
  border:string|null;
}