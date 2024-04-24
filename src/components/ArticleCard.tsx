import { useState } from "react";

type TArticle = {
  id: string;
  image: string;
  date: string;
  category: string;
  title: string;
};

const ArticleCard = ({ article }: { article: TArticle }) => {
  const { image, date, category, title } = article;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="card rounded-lg">
      {/* skeleton */}
      {!isImageLoaded && (
        <div className="space-y-2 w-full">
          <div className="skeleton h-36 lg:h-52 2xl:h-72 w-full rounded-lg"></div>
          <div className="flex gap-1 w-1/5">
            <div className="skeleton h-4 w-1/2 rounded-lg"></div>
            <div className="skeleton h-4 w-1/2 rounded-lg"></div>
          </div>
          <div className="skeleton h-4 w-11/12 rounded-lg"></div>
        </div>
      )}
      {/* card */}
      <div className={isImageLoaded ? "block" : "hidden"}>
        <figure>
          <img src={image} onLoad={handleImageLoad} />
        </figure>
        {/* Description */}
        <div className="pt-2 p-0 space-y-2">
          <div className="text-sm text-TSecondary flex gap-5">
            <p>{date}</p>
            <p>{category}</p>
          </div>
          <h2 className="font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
