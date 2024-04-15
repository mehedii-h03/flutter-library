import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type TStaggerAnimationProps = {
  classes: string;
  children: ReactNode;
};

const StaggerAnimation = ({ classes, children }: TStaggerAnimationProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animateControl = useAnimation();

  const cardParent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  useEffect(() => {
    if (inView) {
      animateControl.start("visible");
    } else {
      animateControl.start("hidden");
    }
  }, [inView, animateControl]);
  return (
    <motion.div
      ref={ref}
      variants={cardParent}
      initial="hidden"
      animate={animateControl}
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export default StaggerAnimation;
