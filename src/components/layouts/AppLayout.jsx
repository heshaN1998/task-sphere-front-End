import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <NavBar />
        <main className="flex-1 bg-slate-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
