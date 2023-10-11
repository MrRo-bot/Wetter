import { weatherman } from "../assets/images";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", delay: 0.2, duration: 0.4 }}
      className="grid w-screen h-screen font-pathway bg-body dark:bg-bodyD place-items-center"
    >
      <div className="relative flex flex-col items-center">
        <img className="w-36 h-36" src={weatherman} />
        <span className="font-audiowide text-3xl text-[var(--maroon)]">
          Wetter
        </span>
        <motion.span
          initial={{ x: -48, opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: -25 }}
          transition={{
            type: "spring",
            stiffness: 150,
            delay: 0.8,
            duration: 0.4,
          }}
          className="absolute text-xs font-thin text-center -left-24 -top-12 w-28"
          style={{ color: "var(--maroon)" }}
        >
          <p className="text-[var(--purple)]">Allow</p> and remember location
          for better experience😊
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Loading;
