import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ManagerRoute({ children }) {
  const { isManager } = useAuth();

  if (!isManager) return <Navigate to="/reports" replace />;

  return children;
}
