import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  var heading = "Dit website er et af de vigtigste touchpoints.";
  var subheading =
    " Vi skaber løsninger, der sikrer performance og optimal kunderejse.";
  return (
    <motion.section
      initial={{ y: "30%" }}
      animate={{ y: 0 }}
      exit={{ y: "-30%" }}
      transition={{ type: "tween", duration: 1, ease: [0.77, 0, 0.18, 1] }}
      className="hero pt-20 px-16 place-content-center bg-primary min-h-screen grid grid-cols-12"
    >
      <div className="overflow-hidden mx-auto col-span-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 0.5,
            ease: [0.77, 0, 0.18, 1],
          }}
          className="text-7xl max-w-prose text-center py-1 my-auto"
        >
          {heading}
        </motion.h1>
      </div>
      <div className="overflow-hidden mx-auto col-span-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 0.6,
            ease: [0.77, 0, 0.18, 1],
          }}
          className="text-4xl max-w-prose text-center  py-1  my-auto"
        >
          {subheading}
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default Hero;
