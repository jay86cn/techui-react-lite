import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@/assets/main.less"
import TechUIGlobal,{GlobalProvider} from "techui-react-lite"

TechUIGlobal().then(()=>{//wait load wasm module then init ReactDOM
  ReactDOM.createRoot(document.getElementById('root-techui') as HTMLElement).render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  )
})

