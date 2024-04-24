import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  //Animation
  const initial = {
    opacity: 0,
    y: -20,
  };
  const ultimate = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  };

  //Theme
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  //Toggling the state
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "sunset" : "light"));
  };

  return (
    <motion.div
      initial={initial}
      animate={ultimate}
      className="grid grid-cols-12 gap-2 sm:gap-4 place-content-center p-2 md:p-3 lg:p-4"
    >
      {/* Search */}
      <label className="input flex items-center gap-2 bg-secondary rounded-full col-span-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="text" className="w-full grow" placeholder="Search...." />
      </label>
      <div className="col-span-7 ms-auto flex justify-center items-center gap-2 lg:gap-4">
        {/* light/dark mode */}
        <ThemeToggle checked={theme === "sunset"} onChange={handleToggle} />
        {/* Buttons */}
        <button className="btn bg-transparent border-secondary px-2 py-2 lg:px-4 lg:py-3 rounded-2xl">
          Login
        </button>
        <button className="btn bg-black hover:bg-black text-white border-secondary py-2 px-2 lg:px-4 lg:py-3 rounded-2xl text-xs">
          Get Pro
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
