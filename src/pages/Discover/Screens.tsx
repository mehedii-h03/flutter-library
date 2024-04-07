import { Link } from "react-router-dom";
import filter from "../../assets/icons/filter.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ScreensCard from "../../components/ScreensCard";

type TScreen = {
  id: number;
  image: string;
};

const Screens = () => {
  const [screens, setScreens] = useState<TScreen[]>([]);

  useEffect(() => {
    fetch("./screens.json")
      .then((res) => res.json())
      .then((data) => {
        setScreens(data);
      });
  }, []);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl mb-4">Articles</h3>
        <Link to="" className="text-xs text-TSecondary">
          See all
        </Link>
      </div>
      <div className="flex items-center">
        <div className=" border-secondary border-r-2 pr-4">
          <button className="bg-secondary px-4 py-2 flex justify-center items-center gap-2 rounded-3xl text-sm border-0 hover:bg-[#cbc8c8]">
            <img src={filter} alt="" />
            <span>Filter</span>
          </button>
        </div>
        <div className="ml-4 flex flex-wrap gap-4">
          <button className="screens-btn bg-primary">All</button>
          <button className="screens-btn">New</button>
          <button className="screens-btn">Popular</button>
          <button className="screens-btn">Onboarding</button>
          <button className="screens-btn">Auth</button>
          <button className="screens-btn">Shop</button>
          <button className="screens-btn">Chat</button>
          <button className="screens-btn">TOP Verification</button>
          <button className="screens-btn">Dashboard</button>
          <button className="screens-btn">Food</button>
          <button className="screens-btn">Restaurant</button>
          <button className="screens-btn">Fitness</button>
          <button>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {screens.map((screen) => (
          <ScreensCard key={screen.id} screen={screen} />
        ))}
      </div>
    </div>
  );
};

export default Screens;
