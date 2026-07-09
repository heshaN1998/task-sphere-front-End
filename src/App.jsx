import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/layouts/ProtectedRoute';
import Dashbord from './pages/Dashbord';
import Users from './pages/Users';
import Project from './pages/Project';
import Profile from './pages/Profile';
import ManagerRoute from './components/layouts/ManagerRoute';
import NotFound from './pages/NotFoun';
import Reports from './pages/Report';
import ReportForm from './pages/ReportForm';
// import AiAsistant from './pages/AiAsistant.jsx.disabled';

function App() {


  return (
    <Routes>
      {/* {public routes} */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      {/* {autheticated routes} */}
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
      <Route index element={<Navigate to="/reports" replace />} />
      <Route path="/dashboard" element={<ManagerRoute><Dashbord /></ManagerRoute>}/>
      <Route path="/projects" element={<Project />}/>
      <Route path="/reports" element={<Reports />}/>
      <Route path="/reports/new" element={<ReportForm />}/>
      <Route path="/reports/:id/edit" element={<ReportForm />}/>
      <Route path="/users" element={<ManagerRoute><Users /></ManagerRoute>}/>
      <Route path="/profile" element={<Profile />}/>
      {/* <Route path="/intelligent-assistant" element={<AiAsistant />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
