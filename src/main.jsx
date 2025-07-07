import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContextProvider>
  </StrictMode>,
)
