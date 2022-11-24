import FeatherIcons from "feather-icons-react";
import { motion } from "framer-motion";

const MotionIconsBtn = ({ white, icon, onclick }) => {
  return (
    <>
      {white ? (
        <motion.button
          whileHover={{
            scale: 1.2,
            opacity: 1,
          }}
          onClick={onclick}
          className="w-8 h-8 text-white opacity-80"
        >
          <FeatherIcons className="w-full" icon={icon} />
        </motion.button>
      ) : (
        <motion.button
          whileHover={{
            scale: 1.2,
            opacity: 1,
          }}
          onClick={onclick}
          className="w-8 h-8 text-paragraphColor-100 opacity-80"
        >
          <FeatherIcons className="w-full" icon={icon} />
        </motion.button>
      )}
    </>
  );
};

export default MotionIconsBtn;
