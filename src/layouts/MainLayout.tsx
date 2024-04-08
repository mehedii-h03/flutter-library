import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 lg:px-0">
      <div className="col-span-12 lg:col-span-2 pt-2 lg:pt-0">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-10 space-y-7 lg:space-y-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
