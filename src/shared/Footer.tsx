import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="space-y-4 text-center md:text-start">
          <img className="w-32 mx-auto md:mx-0" src={logo} alt="logo" />
          <p className="text-TSecondary mx-auto md:mx-0 max-w-[70ch]">
            Beautifully designed, expertly crafted Flutter components and
            templates, to jumpstart your projects and speed up your development
            process.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to=""
              className="bg-[#0D0D0E] text-[#F8F8F8] w-8 h-8 rounded-full flex justify-center items-center"
            >
              <FaXTwitter />
            </Link>
            <Link
              to=""
              className="bg-[#0D0D0E] text-[#F8F8F8] w-8 h-8 rounded-full flex justify-center items-center"
            >
              <FaLinkedin />
            </Link>
            <Link
              to=""
              className="bg-[#0D0D0E] text-[#F8F8F8] w-8 h-8 rounded-full flex justify-center items-center"
            >
              <FaInstagram />
            </Link>
            <Link
              to=""
              className="bg-[#0D0D0E] text-[#F8F8F8] w-8 h-8 rounded-full flex justify-center items-center"
            >
              <IoLogoFacebook />
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-16 mt-5 md:mt-0">
          <ul className="text-sm space-y-2">
            <li className="font-semibold">
              <Link to="">Explore</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Template</Link>
            </li>
            <li>
              <Link to="">Screen</Link>
            </li>
          </ul>
          <ul className="text-sm space-y-2">
            <li className="font-semibold">
              <Link to="">Support</Link>
            </li>
            <li>
              <Link to="">Pricing</Link>
            </li>
            <li>
              <Link to="">Become a sponsor</Link>
            </li>
            <li>
              <Link to="">Hire top Flutter Devs</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6" />
      <div className="mt-6 flex text-center md:text-start flex-col md:flex-row space-y-4 md:space-y-0 justify-between text-sm text-TSecondary">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
