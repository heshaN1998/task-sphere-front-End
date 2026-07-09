import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button, Badge } from "../ui";
import { toTitleCase } from "../../utils/formatters";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <p className="text-sm text-slate-500 sm:hidden">TaskSphere</p>
      <div className="ml-auto flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-700">{user?.fullName}</p>
          <Badge className="bg-primary-50 text-primary-700">{toTitleCase(user?.role)}</Badge>
        </div>
        <Button variant="secondary" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
