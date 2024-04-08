import Articles from "./Articles";
import Screens from "./Screens";
import Templates from "./Templates";

const Discover = () => {
  return (
    <section className="px-2 lg:px-4">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-4xl leading-tight max-w-[20ch] mx-auto">
          Build your next App even faster!
        </h1>
        <p className="text-TSecondary mx-auto max-w-[70ch]">
          Beautifully designed, expertly crafted Flutter components and
          templates, to jumpstart your projects and speed up your development
          process.
        </p>
      </div>
      <Templates />
      <Articles />
      <Screens />
    </section>
  );
};

export default Discover;
