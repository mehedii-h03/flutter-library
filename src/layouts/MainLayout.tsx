import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 px-3 lg:px-0">
      <div className="col-span-12 lg:col-span-2 pt-2 lg:pt-0">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-10 space-y-10 py-4 lg:p-4">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
