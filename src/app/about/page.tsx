"use client";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Image from "next/image";
var heading = "Dit website er et af de vigtigste touchpoints.";
var subheading =
  " Aute sint do excepteur sunt irure occaecat nostrud duis. Culpa cillum eu nisi voluptate veniam excepteur. Ut elit aliquip quis. Lorem veniam voluptate occaecat ex exercitation voluptate deserunt incididunt ut pariatur dolor velit fugiat sit.";

export default function About() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <AnimatePresence mode="sync">
        <section className="grid grid-cols-12 gap-5 m min-h-screen p-5 *:overflow-hidden *:rounded-xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="relative col-span-4 bg-cover object-cover bg-red-500 h-full"
          >
            <Image
              className="bg-cover object-cover"
              fill
              src={
                "https://assets.lummi.ai/assets/QmUvv5zFDrFkwhMapdEVKMobmzXeQkvpjRZhcAmSFRHZDe"
              }
              alt={""}
            />
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start justify-center col-span-8 w-full bg-neutral-50 h-full px-28 relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute size-96 z-0 bg-yellow-200 blur-3xl top-12 right-0 bg-blend-color"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute size-80 z-0 bg-red-200 blur-3xl top-0 right-40 bg-blend-color"
            />
            <div className="z-10 w-full space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-7xl w-full z-10 text-left font-bold max-w-prose text-slate-900 text-balance mt-10"
              >
                {heading}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="w-full text-left z-10 max-w-prose text-slate-900 text-balance"
              >
                {subheading}
              </motion.p>
            </div>
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
}
