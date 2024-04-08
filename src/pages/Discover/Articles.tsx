import { useEffect, useRef, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { Link } from "react-router-dom";
import ArticleSkeleton from "../../components/skeleton/ArticleSkeleton";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

type TArticle = {
  id: string;
  image: string;
  date: string;
  category: string;
  title: string;
};

const Articles = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);
  useEffect(() => {
    fetch("./articles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
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
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl mb-4">Articles</h3>
        <Link to="" className="text-xs text-TSecondary">
          See all
        </Link>
      </div>
      {articles.length === 0 && <ArticleSkeleton />}
      <motion.div
        ref={ref}
        variants={cardParent}
        initial="hidden"
        animate={animateControl}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center sm:place-items-start"
      >
        {articles.map((article) => (
          <motion.div variants={cardChild}>
            <ArticleCard key={article.id} article={article} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Articles;
