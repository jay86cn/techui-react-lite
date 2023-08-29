import {useState} from "react"
import {Loading,TechButtonA2,timer} from "techui-react-lite";
import "./less/demo-loading.less"


export default ()=>{
  const [state,setState]=useState({
    show:false,
    desc:"Loading, please wait !"
  })
  const code=`<loading :show="state.loadingShow"  :desc="state.desc"></loading>`
  const changeState=()=>{
    setState((pre)=>({
      ...pre,
      show:true
    }))
    timer.s("loadingTest",()=>{
      setState((pre)=>({
        ...pre,
        show:false
      }))
    },2000)
  }
  return (
    <div className="demo-loading demo-deco">
      <div className="deco-wrap">
        <div className="deco-intro">
          <div className="intro">Intro:</div>
          <div className="content">
            <p>Loading component is a full-screen component used to improve user experience when loading charts and data.</p>
            <p>Under normal circumstances, the loading component does not need to be called separately, it is already built into the adaptivePanel adaptive component.</p>
            <p>Two parameters, show: required, desc: optional (default: Loading)</p>
            <p>In special cases, if you need to call separately, please refer to the case below.</p>
          </div>
        </div>
        <div className="code-wrap">
          <div className="code-item">
            <div className="title">How to use</div>
            <div className="desc">Display or hide Loading by modifying the show parameter</div>
            <div className="code-wrap">
              <code>{code}</code>
            </div>
          </div>
        </div>
        <div onClick={changeState}>Show Loading</div>
        <TechButtonA2 onClick={changeState}>Show Loading</TechButtonA2>
      </div>
      {/* Replace 'Loading' with your actual Loading component */}
      <Loading config={state}/>
      
    </div>
  )
}