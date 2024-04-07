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
  return (
    // TODO: have to wrap with Link
    <div className="card w-80 rounded-lg">
      <figure>
        <img src={image} />
      </figure>
      {/* Description */}
      <div className="pt-2 p-0 flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-1">
            <img className="w-3" src={kit} />
            <p className="text-sm">{views}</p>
          </div>
          <div className="flex justify-between items-center gap-1">
            <img className="w-3" src={downloadIcon} alt="" />
            <p className="text-sm">{downloads}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
