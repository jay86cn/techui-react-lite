// import {lazy,Suspense} from "react"
import {RouteObject,useRoutes,Navigate} from "react-router-dom";

import CompsDemo from "./views/componentsDemo"
import DashboardA from "./views/dashboardA"
import DashboardB from "./views/dashboardB"
import DashboardC from "./views/dashboardC"
import DashboardD from "./views/dashboardD"
import Error404 from "./views/error/error404"

const staticRouters: RouteObject[]=[
  {path:"/",element:<Navigate to="/dashboardA"/>},
  {path:"/dashboardA", element:<DashboardA/>},
  {path:"/dashboardB", element:<DashboardB/>},
  {path:"/dashboardC", element:<DashboardC/>},
  {path:"/dashboardD", element:<DashboardD/>},
  {path:"/compsDemo",element:<CompsDemo/>},
  {path:"*",element:<Error404/>},
]

export default ()=>useRoutes(staticRouters)

