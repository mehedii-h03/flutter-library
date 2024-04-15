import AllScreens from "../components/AllScreens";
import SidebarMenu from "../components/SidebarMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

//TODO: Add aside link list and make correct hover color with active link

const Sidebar = () => {
  const initial = {
    x: -20,
    opacity: 0,
  };
  const ultimate = {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
      delay: .4,
    },
  };
  return (
    <motion.aside
      initial={initial}
      animate={ultimate}
      className="drawer lg:drawer-open lg:block lg:border-r border-secondary z-10 h-full"
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center my-2">
        <label
          htmlFor="my-drawer-2"
          className="btn bg-transparent btn-sm drawer-button lg:hidden"
        >
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-1/2 sm:w-1/3 lg:w-full min-h-full bg-white lg:bg-transparent">
          <SidebarMenu />
          <AllScreens />
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
