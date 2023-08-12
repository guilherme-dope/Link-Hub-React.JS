import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle} from "./assets/GlobalStyle.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <GlobalStyle />
    <App />
  </React.StrictMode>,
)
