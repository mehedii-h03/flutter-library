import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-3 lg:px-0">
      <div className="col-span-2 py-4 lg:py-0">
        <Sidebar />
      </div>
      <div className="col-span-10 py-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
