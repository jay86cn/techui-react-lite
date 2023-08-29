export default [
  {id:1,label:'dashboard',name:'工作台',icon:"i carbon:airplay-filled"},
  {id:2,label:'memo',name:'备忘录',icon:"i carbon:airplay-filled"},
  {id:3,label:'developing',name:'开发中',icon:"i carbon:airplay-filled"},
  {id:4,label:"dashboardSub",name:"子工作台",icon:"i carbon:airplay-filled",children:[
    {id:41,label:"dashboardA",name:"工作台A"},
    {id:42,label:"dashboardB",name:"工作台B"},
  ]},
  {id:5,label:"user",name:"用户",icon:"i carbon:user-avatar-filled",children:[
    {id:51,label:"info",name:"资料"},
    {id:52,label:"password",name:"密码"},
  ]},
  {id:6,label:"typeScript",name:"TS二刷",icon:"i carbon:user-avatar-filled",children:[
    {id:61,label:"ts01",name:"TS范例1"},
    {id:62,label:"ts02",name:"TS范例2"},
    {id:62,label:"ts03",name:"TS范例3"},
  ]},
  {id:8,label:"reactAdv",name:"React高阶知识点",icon:"i carbon:user-avatar-filled",children:[
    {id:81,label:"useContextDM",name:"useContextBase"},
    {id:81,label:"useContextAuth",name:"useContextAuth"},
    {id:82,label:"useReducerDM",name:"useReducer"},
    {id:83,label:"useReducerImmer",name:"useReducerImmer"},
    {id:84,label:"useReducerSC",name:"useReducerCart"},
    {id:85,label:"useCallbackDM",name:"useCallback"},
    {id:86,label:"useRefDM",name:"useRef"},
    {id:87,label:"useMemoDM",name:"useMemo"},
    {id:88,label:"useLayoutEffectDM",name:"useLayoutEffect"},
    // {id:85,label:"forwardRefDM",name:"forwardRef"},
    {id:89,label:"useImmerDM",name:"useImmer"},
  ]},
  {id:7,label:"snake",name:"贪吃蛇",icon:"i carbon:user-avatar-filled"}
]