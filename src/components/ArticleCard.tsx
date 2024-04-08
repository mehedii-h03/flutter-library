type TArticle = {
  id: string;
  image: string;
  date: string;
  category: string;
  title: string;
};

const ArticleCard = ({ article }: { article: TArticle }) => {
  const { image, date, category, title } = article;
  return (
    // TODO: have to wrap with Link
    <div className="card max-w-80 rounded-lg">
      <figure>
        <img src={image} />
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
  );
};

export default ArticleCard;
