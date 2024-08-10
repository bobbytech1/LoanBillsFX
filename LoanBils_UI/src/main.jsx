import React from 'react'
import ReactDOM from 'react-dom/client'
import FolderRoute from './routes/route.jsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./toastify.css"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <FolderRoute />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
)
