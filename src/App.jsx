import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/layouts/ProtectedRoute';
import Dashbord from './pages/Dashbord';
import Project from './pages/Project';
import Profile from './pages/Profile';
import ManagerRoute from './components/layouts/ManagerRoute';
import NotFound from './pages/NotFoun';
import Reports from './pages/Report';
import ReportForm from './pages/ReportForm';  

function App() {


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route  element={<ProtectedRoute><AppLayout /></ProtectedRoute>} />
      <Route path="/dashbord" element={<Dashbord  />} />
      <Route path="/users" element={<ManagerRoute>Users</ManagerRoute>} />
      <Route path="/projects" element={<Project />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path ="/reports" element={<Reports />} />
      <Route path="/reports/new" element={<ReportForm />} />
      <Route path="/reports/:id/edit" element={<ReportForm />} />
     
    </Routes>
  );
}

export default App
