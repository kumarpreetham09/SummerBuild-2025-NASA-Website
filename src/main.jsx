import React from 'react';
import ReactDOM from 'react-dom/client';
import APOD from './pages/APOD.jsx';
import Mars from './pages/Mars.jsx';
import Earth from './pages/Earth.jsx';
import Homepage from './pages/Homepage.jsx';
import FunFacts from './pages/FunFacts.jsx';
import Asteroids from './pages/Asteroids.jsx';

import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/apod", element: <APOD /> },
  { path: "/mars", element: <Mars /> },
  { path: "/earth", element: <Earth /> },
  { path: "/funfacts", element: <FunFacts /> },
  { path: "/asteroids", element: <Asteroids /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
