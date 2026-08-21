import React from 'react'
import ReactDOM from "react-dom/client";
import "@tailwindplus/elements";
import { RouterProvider } from 'react-router-dom'


import './index.css'
import { appRouter } from './routes/appRouter'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
)
