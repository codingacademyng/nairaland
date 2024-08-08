import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Layout from './components/Layout'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <Layout/>
  </React.StrictMode>,
)
