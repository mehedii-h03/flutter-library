import Articles from "./Articles";
import Screens from "./Screens";
import Templates from "./Templates";
import { motion } from "framer-motion";

const Discover = () => {
  const initial = {
    opacity: 0,
  };
  const ultimate = {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  };
  return (
    <section className="px-2 lg:px-6">
      <motion.div
        initial={initial}
        animate={ultimate}
        className="text-center space-y-2 mb-10"
      >
        <motion.h1 className="text-4xl leading-tight max-w-[20ch] mx-auto">
          Build your next App even faster!
        </motion.h1>
        <motion.p className="text-TSecondary mx-auto max-w-[70ch]">
          Beautifully designed, expertly crafted Flutter components and
          templates, to jumpstart your projects and speed up your development
          process.
        </motion.p>
      </motion.div>
      {/* Contents */}
      <Templates />
      <Articles />
      <Screens />
    </section>
  );
};

export default Discover;
