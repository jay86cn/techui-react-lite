import "./less/demo-adaptivePanel.less"
export default ()=>{
  
const codeDemos=[
  {title:"General Usage",
  code:`const state=reactive({
    APConfig:{
      width:1920,
      height:930,
      userSelect:true,//Whether the cursor can be selected
      chartCount:9//Current total number of charts, control loading
    }
  })
  
  <adaptivePanel :config="state.APConfig">
    <component></component>
  </adaptivePanel>`
  },
  {title: "Width & Height Default",desc: "If you do not specify width, height, the default case wdith=1920,height=1080",
  code:`const state=reactive({
    APConfig:{
      chartCount:9
    }
  })
  <adaptivePanel :config="state.APConfig">
    <component></component>
  </adaptivePanel>`
  },
  {title: "Band fish screen resolution",desc: "Band fish screen can be seen as a case of two 1080p screens arranged horizontally",
  code:`const state=reactive({
    APConfig:{
      width:3840,
      height:1080,
      loading:false//默认关闭loading
    }
  })
  <adaptivePanel :config="state.APConfig">
    <component></component>
  </adaptivePanel>`
  },
  {title:"Enterprise splicing screen 4 * 2",desc: "This resolution, equivalent to 1080p resolution horizontal 4 pieces, vertical 2 pieces spliced together.",
  code:`const state=reactive({
    APConfig:{
      width:7860,
      height:2160,
    }
  })
  <adaptivePanel :config="state.APConfig">
    <component></component>
  </adaptivePanel>`
  },
  {title: "Other modes", desc: "The [adaptivePanel] component in the lite version only provides [proportional] mode, the full version provides 3 additional scaling modes. Switching is done via the [adaptiveType] parameter",
  code:`adaptiveType: proportional | advance | scroll | stretch 
  
  proportional mode: isometric mode, the default or set view size is scaled according to the browser window.
  
  advance mode: When adapting to the desktop screen, the height adaption will be done within a specific view scale to fill the whole browser window, 
                such as full-screen mode and maximized window mode can be perfectly adapted.
  
  scroll mode: After specifying the width, its height will be self-adapted to fit any proportion of the view, using this mode, 
               you can perfectly fit any mobile device, any view on the PC.
  
  stretch mode: stretch mode, ignoring the original view proportion, stretch or compress the original according to the browser window, 
                generally used to fix the old large screen device view stretch a special mode, please refer to the documentation for details.
  `
  },
  
  ]

  return (
    <div className="demo-adaptivePanel demo-deco">
      <div className="deco-wrap">
        <div className="deco-intro">
          <div className="intro">Intro :</div>
          <div className="content">
            <p> The full-screen adaptive component [adaptivePanel] is a component to quickly realize the proportional scaling function of the content </p>
            <p> [adaptivePanel] in the TechUI lite version only provides the proportional zoom function, in the advanced version, there are 3 additional zoom modes, which can be perfectly adapted to the desktop and mobile terminals. Please move to [<a target="_blank" href="https://techui.net/docs/component/a01-adaptive-panel">techui.net/docs</a>] to view. </p>
            <p> Although the adaptive components provided by the lite version only provide proportional scaling, they have fully met the needs of conventional projects. In fact, most of the adaptation methods for data visualization on the market are proportional scaling. </p>
            <p> By customizing the width and height parameters, it can even meet the needs of enterprise splicing screens. </p>
            <p> This page uses a full-screen adaptive component, which can be experienced by dragging the size of the browser window. </p>
          </div>
        </div>
        <div className="code-wrap">
          {codeDemos.map((item, index) => (
            <div className="code-item" key={index}>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
              <div className="code-wrap">
                <code>{item.code}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}