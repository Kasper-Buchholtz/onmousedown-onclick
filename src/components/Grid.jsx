"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
var text = "Dit website er et af de vigtigste touchpoints.";
export default function Grid() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.015;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          className="w-full h-[2.5vw]"
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorize = (el) => {
    el.style.backgroundColor = "#3BE086";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 500);
  };

  return (
    <AnimatePresence mode="sync">
      <div className=" flex h-screen items-center justify-center bg-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 0.1,
            ease: [0.77, 0, 0.18, 1],
          }}
          className=" text-[6vw] text-center font-bold w-[70%] relative text-balance pointer-events-none uppercase text-light"
        >
          <h1>{text}</h1>
        </motion.div>
        <div className="flex h-full w-full overflow-hidden absolute">
          {windowsWidth > 0 &&
            [...Array(40).keys()].map((_, index) => {
              return (
                <div key={index} className=" w-[2.5vw]">
                  {getBlocks()}
                </div>
              );
            })}
        </div>
      </div>
    </AnimatePresence>
  );
}
