import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/Global.css'
import { BrowserRouter } from 'react-router-dom';

//LLama el archivo de session para identifiacr las pantallas a mostrar dependiendo del rol 
import { SessionProvider } from './SessionContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SessionProvider>
        <App />
      </SessionProvider>
    </StrictMode>
  </BrowserRouter>
);
