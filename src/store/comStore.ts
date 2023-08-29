import {create} from "zustand"

type TState={
  num:number;
  array:number[];
  increase:()=>void;
  remove:()=>void;
  addArry:()=>void;
  httpGetNav:()=>void;
}

export default create<TState>()((set)=>({
  num:0,
  array:[1,2,3,4],
  increase:()=>set((state)=>({
    // ...state, 这里zustand自动处理了第一层的数据，所以无需赋值第一层。
    num:state.num+1,
  })),
  remove:()=>set({num:0}),
  addArry:()=>set((state)=>({array:[...state.array,9]})),
  httpGetNav:async ()=>{
    const response=await fetch("https://test/test");
    console.log(response);
    
  }
}))