import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const linkClasses = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-primary-50 text-primary-700" : "text-slate-600 hover:bg-slate-100"
  }`;

export default function Sidebar() {
  const { isManager } = useAuth();

  return (
    <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-white p-4 sm:block">
      <div className="mb-6 px-2">
        <p className="text-lg font-bold text-primary-700">TaskSphere</p>
        <p className="text-xs text-slate-400">Weekly Reports Tracker</p>
      </div>

      <nav className="flex flex-col gap-1">
        {isManager && (
          <NavLink to="/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>
        )}
        <NavLink to="/reports" className={linkClasses}>
          My Reports
        </NavLink>
        <NavLink to="/projects" className={linkClasses}>
          Projects
        </NavLink>
        {isManager && (
          <NavLink to="/users" className={linkClasses}>
            Team Members
          </NavLink>
        )}
        <NavLink to="/profile" className={linkClasses}>
          Profile
        </NavLink>
        {/* <NavLink to="/intelligent-assistant" className={linkClasses}>
          AI Assistant
        </NavLink> */}
      </nav>
    </aside>
  );
}
