import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/layouts/ProtectedRoute';
import Dashbord from './pages/Dashbord';

function App() {


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route  element={<ProtectedRoute><AppLayout /></ProtectedRoute>} />
      <Route path="/dashbord" element={<Dashbord  />} />
    </Routes>
  );
}

export default App
