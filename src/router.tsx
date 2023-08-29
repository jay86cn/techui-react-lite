// import {lazy,Suspense} from "react"
import {RouteObject,useRoutes,Navigate} from "react-router-dom";

import CompsDemo from "./views/componentsDemo"
import DashboardA from "./views/dashboardA"
import Error404 from "./views/error/error404"

const staticRouters: RouteObject[]=[
  {path:"/",element:<Navigate to="/compsDemo"/>},
  {path:"/dashboardA", element:<DashboardA/>},
  {path:"/compsDemo",element:<CompsDemo/>},
  {path:"*",element:<Error404/>},
]

export default ()=>useRoutes(staticRouters)

