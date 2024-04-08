import { useEffect, useState } from "react";
import TemplateCard from "../../components/TemplateCard";
import { Link } from "react-router-dom";
import TemplateSkeleton from "../../components/skeleton/TemplateSkeleton";

type TTemplate = {
  id: string;
  image: string;
  title: string;
  views: number;
  downloads: number;
};

const Templates = () => {
  const [templates, setTemplates] = useState<TTemplate[]>([]);
  useEffect(() => {
    fetch("./templates.json")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl mb-4">Templates</h3>
        <Link to="" className="text-xs text-TSecondary">
          See all
        </Link>
      </div>
      {templates.length === 0 && <TemplateSkeleton />}
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center sm:place-items-start">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default Templates;
