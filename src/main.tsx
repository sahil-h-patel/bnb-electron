import ReactDOM from 'react-dom/client'
import { Route, HashRouter as Router, Routes } from "react-router";
import './index.css'
import { Welcome, Name, Cart, Receipt, CloseDoors, Admin, Tare} from '@/pages';
import { UserProvider } from '@/context/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/name" element={<Name />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/close-doors" element={<CloseDoors />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tare" element={<Tare />} />
      </Routes>
    </UserProvider>
  </Router>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
