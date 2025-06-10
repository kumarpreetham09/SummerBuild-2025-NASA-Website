import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mars from './Mars.jsx'
import Earth from './Earth.jsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/",element:<App></App>},
  {path:"/mars",element:<Mars></Mars>},
  {path:"/earth",element:<Earth></Earth>},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
