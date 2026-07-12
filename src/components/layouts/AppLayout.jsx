import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import NavBar from "./NavBar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <NavBar />
        <main className="flex-1 bg-slate-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
