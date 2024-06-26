const TemplateSkeleton = () => {
  const skeleton = (
    <div className="space-y-2 w-full">
      <div className="skeleton  h-36 lg:h-52 2xl:h-72 w-full rounded-lg"></div>
      <div className="flex gap-1 w-1/5">
        <div className="skeleton h-4 w-1/2 rounded-lg"></div>
        <div className="skeleton h-4 w-1/2 rounded-lg"></div>
      </div>
      <div className="skeleton h-4 w-11/12 rounded-lg"></div>
    </div>
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {skeleton}
      {skeleton}
      {skeleton}
    </div>
  );
};

export default TemplateSkeleton;
