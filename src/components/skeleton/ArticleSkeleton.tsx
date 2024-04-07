const ArticleSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="space-y-2">
        <div className="skeleton h-48 w-full rounded-lg"></div>
        <div className="flex gap-2 mb-2">
          <div className="skeleton h-4 w-14 rounded-lg"></div>
          <div className="skeleton h-4 w-14 rounded-lg"></div>
        </div>
        <div className="skeleton h-4 w-3/4 rounded-lg"></div>
      </div>
      <div className="space-y-2">
        <div className="skeleton h-48 w-full rounded-lg"></div>
        <div className="flex gap-2 mb-2">
          <div className="skeleton h-4 w-14 rounded-lg"></div>
          <div className="skeleton h-4 w-14 rounded-lg"></div>
        </div>
        <div className="skeleton h-4 w-3/4 rounded-lg"></div>
      </div>
      <div className="space-y-2">
        <div className="skeleton h-48 w-full rounded-lg"></div>
        <div className="flex gap-2 mb-2">
          <div className="skeleton h-4 w-14 rounded-lg"></div>
          <div className="skeleton h-4 w-14 rounded-lg"></div>
        </div>
        <div className="skeleton h-4 w-3/4 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
