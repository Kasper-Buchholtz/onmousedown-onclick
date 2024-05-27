"use client";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import CounterOnMouseDown from "@/components/CounterOnMouseDown";
import CounterOnClick from "@/components/CounterOnClick";
export default function Home() {
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
{/*         <motion.div
          className="fixed top-0 left-0 rounded-xl  w-full h-full bg-primary z-50"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ type: "tween", duration: 1, ease: [0.77, 0, 0.18, 1] }}
        /> */}
        <div className="flex justify-around">
        <CounterOnClick />
        <CounterOnMouseDown />
        </div>
        {/* <Grid /> */}
        {/* <Hero /> */}
      </AnimatePresence>
    </>
  );
}
