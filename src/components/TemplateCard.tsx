import { useState } from "react";
import downloadIcon from "../assets/icons/download.svg";
import kit from "../assets/icons/kit.svg";

type TTemplate = {
  id: string;
  image: string;
  title: string;
  views: number;
  downloads: number;
};

const TemplateCard = ({ template }: { template: TTemplate }) => {
  const { image, title, views, downloads } = template;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="card rounded-lg">
      {/* skeleton */}
      {!isImageLoaded && (
        <div className="space-y-2 w-full">
          <div className="skeleton h-72 w-full rounded-lg"></div>
          <div className="flex justify-between gap-3">
            <div className="skeleton h-4 w-4/5 rounded-lg"></div>
            <div className="flex gap-1 w-1/5">
              <div className="skeleton h-4 w-1/2 rounded-lg"></div>
              <div className="skeleton h-4 w-1/2 rounded-lg"></div>
            </div>
          </div>
        </div>
      )}
      {/* card */}
      <div className={isImageLoaded ? "block card rounded-lg" : "hidden"}>
        <figure>
          <img src={image} onLoad={handleImageLoad} alt={title} />
        </figure>
        {/* Description */}
        <div className="pt-2 p-0 flex justify-between items-center">
          <h2 className="font-semibold text-sm md:text-base">{title}</h2>
          <div className="flex justify-between items-center gap-2">
            <div className="flex justify-between items-center gap-1">
              <img className="w-3" src={kit} alt="" />
              <p className="text-sm">{views}</p>
            </div>
            <div className="flex justify-between items-center gap-1">
              <img className="w-3" src={downloadIcon} alt="" />
              <p className="text-sm">{downloads}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
