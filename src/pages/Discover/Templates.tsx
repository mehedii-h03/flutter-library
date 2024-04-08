import { useEffect, useRef, useState } from "react";
import TemplateCard from "../../components/TemplateCard";
import { Link } from "react-router-dom";
import TemplateSkeleton from "../../components/skeleton/TemplateSkeleton";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

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

  // Animation part
  const cardParent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const cardChild = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const animateControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animateControl.start("visible");
    } else {
      animateControl.start("hidden");
    }
  }, [inView, animateControl]);

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
      <motion.div
        ref={ref}
        variants={cardParent}
        initial="hidden"
        animate={animateControl}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center sm:place-items-start"
      >
        {templates.map((template) => (
          <motion.div variants={cardChild}>
            <TemplateCard key={template.id} template={template} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Templates;
