import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import browser from "../assets/icons/discover.svg";
import kit from "../assets/icons/kit.svg";

const SidebarMenu = () => {
  return (
    <ul className="pb-4 text-sm">
      <li className="w-40 px-4 py-2">
        <img src={logo} alt="logo" />
      </li>
      <li>
        <Link
          className="mt-5 bg-secondary text-TPrimary flex gap-2 px-4 py-2"
          to=""
        >
          <img src={browser} className="w-4" />
          Discover
        </Link>
      </li>
      <li>
        <Link className="mt-3 text-TSecondary flex gap-2 px-4 py-2" to="">
          <img src={kit} className="w-4" />
          UI Kits
        </Link>
      </li>
    </ul>
  );
};

export default SidebarMenu;
