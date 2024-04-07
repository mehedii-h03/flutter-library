import { PiCopySimple } from "react-icons/pi";

type TScreen = {
  id: number;
  image: string;
};

const ScreensCard = ({ screen }: { screen: TScreen }) => {
  const { image } = screen;
  return (
    <div className="relative group cursor-pointer border border-secondary rounded-lg">
      <img className="rounded-lg" src={image} alt="" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex gap-4">
          <div className="text-[10px] sm:text-sm bg-white rounded-lg py-1 px-2 lg:py-2 lg:px-4 flex gap-2 justify-center items-center cursor-pointer">
            <PiCopySimple />
            <p>20</p>
          </div>
          <div className="text-[10px] sm:text-sm bg-white rounded-lg py-1 px-2 lg:py-2 lg:px-4 cursor-pointer">
            <p>Copy code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreensCard;
