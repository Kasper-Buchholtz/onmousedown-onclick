"use client";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Image from "next/image";
var heading = "Dit website er et af de vigtigste touchpoints.";
var subheading =
  " Aute sint do excepteur sunt irure occaecat nostrud duis. Culpa cillum eu nisi voluptate veniam excepteur. Ut elit aliquip quis. Lorem veniam voluptate occaecat ex exercitation voluptate deserunt incididunt ut pariatur dolor velit fugiat sit.";

export default function Cases() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  var heading = "Dit website er et af de vigtigste touchpoints.";
  var subheading =
    " Aute sint do excepteur sunt irure occaecat nostrud duis. Culpa cillum eu nisi voluptate veniam excepteur. Ut elit aliquip quis. Lorem veniam voluptate occaecat ex exercitation voluptate deserunt incididunt ut pariatur dolor velit fugiat sit.";

  return (
    <>
      <AnimatePresence mode="sync">
        <section className="min-h-screen bg-neutral-50 overflow-x-hidden">
          <h1 className="uppercase text-9xl text-right absolute top-1/2 right-0 z-10 translate-x-0 px-14 -translate-y-1/2">
            {heading.split(" ").map((word, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                key={index}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>
          <motion.img
            initial={{ width: 0, opacity: 0 }}
            exit={{ width: 0, opacity: 0 }}
            animate={{ opacity: 1, width: "calc(100vw/3)" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className={`absolute top-4 left-4 w-[calc(100vw/3)] rounded-xl h-[calc(100vh/1.3)] bg-cover object-cover  `}
            src="https://source.unsplash.com/random/?furniture&9"
          />
        </section>
      </AnimatePresence>
    </>
  );
}
