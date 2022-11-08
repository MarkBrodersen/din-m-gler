import { motion } from "framer-motion";
const Loading = () => {
  const container = {
    startEnd: {
      scale: 1,
    },
    bigger: {
      scale: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        delayChildren: 0.2,
      },
    },
  };
  const dots = {
    startEnd: {
      scale: 1,
      opacity: 0.5,
    },
    bigger: {
      scale: 1.2,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="startEnd"
      animate="bigger"
      exit="startEnd"
      className="relative -translate-x-1/2 -translate-y-1/2"
    >
      <motion.span
        variants={dots}
        className="w-8 h-8 absolute top-5 left-0 rounded-full bg-stone-600"
      ></motion.span>
      <motion.span
        variants={dots}
        className="w-8 h-8 absolute top-5 left-10 rounded-full bg-stone-600"
      ></motion.span>
      <motion.span
        variants={dots}
        className="w-8 h-8 absolute top-5 left-20 rounded-full bg-stone-600"
      ></motion.span>
    </motion.div>
  );
};

export default Loading;
