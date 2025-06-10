import React from 'react'
import ReactDOM from 'react-dom/client'
import APOD from './pages/APOD.jsx'
import Mars from './pages/Mars.jsx'
import Earth from './pages/Earth.jsx'
import Homepage from './pages/Homepage.jsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/",element:<Homepage></Homepage>},
  {path:"/apod",element:<APOD></APOD>},
  {path:"/mars",element:<Mars></Mars>},
  {path:"/earth",element:<Earth></Earth>},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
