import { useEffect, useState } from "react";
import TemplateCard from "../../components/TemplateCard";
import { Link } from "react-router-dom";
import TemplateSkeleton from "../../components/skeleton/TemplateSkeleton";
import { motion } from "framer-motion";
import StaggerAnimation from "../../components/StaggerAnimation";
import { cardChild } from "../../utility/CardChild";

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

  const initial = { opacity: 0 };
  const ultimate = {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  };

  return (
    <motion.div
      initial={initial}
      animate={ultimate}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl mb-4">Templates</h3>
        <Link to="" className="text-sm text-TSecondary">
          See all
        </Link>
      </div>
      {templates.length === 0 && <TemplateSkeleton />}
      {/* Cards */}
      <StaggerAnimation
        classes={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        }
      >
        {templates.map((template) => (
          <motion.div variants={cardChild} >
            <TemplateCard key={template.id} template={template} />
          </motion.div>
        ))}
      </StaggerAnimation>
    </motion.div>
  );
};

export default Templates;
