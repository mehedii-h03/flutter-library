import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { Link } from "react-router-dom";
import ArticleSkeleton from "../../components/skeleton/ArticleSkeleton";
import { motion } from "framer-motion";
import StaggerAnimation from "../../components/StaggerAnimation";
import { cardChild } from "../../utility/CardChild";

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

  const initial = { opacity: 0 };
  const ultimate = {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  };

  return (
    <div className="mt-10">
      <motion.div
        initial={initial}
        animate={ultimate}
        className="flex justify-between items-center"
      >
        <h3 className="text-2xl mb-4">Articles</h3>
        <Link to="" className="text-sm text-TSecondary">
          See all
        </Link>
      </motion.div>
      {articles.length === 0 && <ArticleSkeleton />}
      <StaggerAnimation
        classes={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center sm:place-items-start"
        }
      >
        {articles.map((article) => (
          <motion.div variants={cardChild}>
            <ArticleCard key={article.id} article={article} />
          </motion.div>
        ))}
      </StaggerAnimation>
    </div>
  );
};

export default Articles;
