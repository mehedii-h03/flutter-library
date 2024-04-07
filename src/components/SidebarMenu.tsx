import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import browser from "../assets/icons/discover.svg";
import kit from "../assets/icons/kit.svg";

const SidebarMenu = () => {
  return (
    <ul className="pb-4 space-y-2">
      <li className="w-40 px-4 py-2">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
          to="/"
        >
          <img src={browser} className="w-4" />
          Discover
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
          to="/ui-kits"
        >
          <img src={kit} className="w-4" />
          UI Kits
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
          to="/screens"
        >
          <img src={kit} className="w-4" />
          Screens
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
          to="/articles"
        >
          <img src={kit} className="w-4" />
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
          to="/become-sponsor"
        >
          <img src={kit} className="w-4" />
          Become Sponsor
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
          to="/hire"
        >
          <img src={kit} className="w-4" />
          Hire Flutter Dev
        </NavLink>
      </li>
    </ul>
  );
};

export default SidebarMenu;
