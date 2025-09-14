import { createBrowserRouter,RouterProvider } from "react-router-dom"
import MainLayout from "./lyaout/MainLayout"
import Home from "./components/Home"
import About from "./components/About"
import Recipes from "./components/Recipes"

export default function App() {

  const routers=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/recipes",
          element:<Recipes/>
        },
      ],
    }
  ])
  return <RouterProvider router={routers}/>
}
