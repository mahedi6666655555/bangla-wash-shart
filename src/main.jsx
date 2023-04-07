import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './componenrts/pages/Main.jsx/Main';
import Home from './componenrts/pages/Home/Home';
import About from './componenrts/About.jsx/About';
import Contact from './componenrts/Contact.jsx/Contact';

let router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[

      {
        path:"/",
        element:<Home></Home>
      },
      
      {
        path:"About",
        element:<About></About>
      },
      {
        path:"Contact",
        element:<Contact></Contact>
      },



    ]

  },
  
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}></RouterProvider>


  </React.StrictMode>,
)
