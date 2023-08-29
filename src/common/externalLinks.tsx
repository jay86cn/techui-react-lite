import "./common.less"
export default ()=>{
  const nav=[
    {label:"Document",icon:"i carbon:catalog",path:"http://lite.techui.net/docs"},
    {label:"Gtihub",icon:"i carbon:logo-github",path:"https://github.com/ayin86/techui-vue3-lite"},
    {label:"Vue2 Premium",icon:"i carbon:logo-vue",path:"http://techui.net/docs"},
    {label:"Vue3 Lite",icon:"i carbon:logo-vue",path:"http://techui.net/docs"},
    {label:"React Lite",active:true,icon:"i carbon:logo-react",path:"http://techui.net/docs"},
  ]

  const goToLink=(path:string)=>{
    window.open(path);
  }

  return (
    <div className={`external-wrap`}>
      <div className="link-wrap">
        {nav.map((item,index) => (
          <div className={`item ${item.active?'active':''}`} onClick={() => goToLink(item.path)} key={index}>
            <i className={item.icon}></i>
            {item.label}
          </div>
        ))}
      </div>
      
    </div>
  )
}