import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { Link } from "react-router-dom";

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
  console.log(articles);
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl mb-4">Articles</h3>
        <Link to="" className="text-xs text-TSecondary">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center sm:place-items-start">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
