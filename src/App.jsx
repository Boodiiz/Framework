import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './assets/Components/Contact/Contact'
import About from './assets/Components/About/About'
import Home from './assets/Components/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './assets/Components/Layout/Layout'
import Portfolio from './assets/Components/Portfolio/Portfolio'
import Notfound from './assets/Components/Notfound/Notfound'
function App() {
  const [count, setCount] = useState(0)

  
 let routes =  createBrowserRouter([{
    path:"", element:<Layout/>, children:[
      {index:true, element:<Home/>},
      {path:"about", element:<About/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"contact", element:<Contact/>},
      

      {path:"*", element:<Notfound/>}
    ]


  }])
  
  return (
    <>
  <RouterProvider router={routes}/>
    </>
  )
}

export default App
