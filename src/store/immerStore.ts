import {create} from "zustand"
import {immer} from "zustand/middleware/immer"

type TState={
  num:number;
  array:number[];
  object:{
    cat:number;
    dog:number;
    snake:number;
  };
  increase:()=>void;
  remove:()=>void;
  addArry:()=>void;
  addSnake:()=>void;
  httpGetNav:()=>void;
  summary:()=>number;
}
interface TObj{
    cat: number;
    dog: number;
    snake: number;
}
const store= create<TState>()(
  immer((set,get)=>({
    num:0,
    array:[1,2,3,4],
    object:{
      cat:22,
      dog:32,
      snake:3
    },
    increase:()=>set((state)=>{
      state.num=state.num+1
    }),
    remove:()=>set({num:0}),
    addArry:()=>set((state)=>{
      state.array=[...state.array,9,8,7,6,5]
    }),
    addSnake:()=>set((state)=>{
      state.object.snake++
    }),
    httpGetNav:async ()=>{
      const response=await fetch("https://test/test");
      console.log(response);
    },
    summary:()=>{
      let sum=0;
      const obj:TObj=get().object;
      for(let a in obj){
        if (obj.hasOwnProperty(a)) {
          console.log(a);
          sum+=obj[a]
        }
      }
      console.log("sum",sum);
      return sum
    }
  }))
)
export default store