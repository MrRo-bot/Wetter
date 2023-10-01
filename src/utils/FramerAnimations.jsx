import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const FramerAnimations = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FramerAnimations;
