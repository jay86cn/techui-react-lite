import {useLocation,useNavigate } from 'react-router-dom';


import "./common.less"
export default ()=>{
  const nav=[
    {label:"Components",path:"/compsDemo"},
    {label:"DashboardA",path:"/dashboardA"},
    {label:"DashboardB",path:"/dashboardB"},
    // {label:"DashboardC",path:"/dashboardC"},
    // {label:"DashboardD",path:"/dashboardD"},
  ]
  const navigate = useNavigate();
  const location = useLocation()
  const goToRouter=(path:string)=>{
    // router.push(item.path);
    // console.log("location",location);
    navigate(path);
    
  }
  
  return (
    <div className={`nav-wrap`}>
      {nav.map(item => (
        <div 
          key={item.path} 
          className={`item ${location.pathname === item.path ? 'active' : ''}`} 
          onClick={() => goToRouter(item.path)} 
        > 
          {item.label} 
        </div>
      ))}
    </div>
  )
}