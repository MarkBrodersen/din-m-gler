import { motion } from "framer-motion";
const Loading = () => {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      exit={{ scale: 1 }}
    >
      <span className="w-32 h-32 rounded-full bg-stone-600"></span>
      <span className="w-32 h-32 rounded-full bg-stone-600"></span>
      <span className="w-32 h-32 rounded-full bg-stone-600"></span>
    </motion.div>
  );
};

export default Loading;
