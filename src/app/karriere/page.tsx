"use client";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { time } from "console";
import Link from "next/link";
import Jobs from "@/components/Jobs";

export default function Cases() {
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

        <Jobs />
        
      </AnimatePresence>
    </>
  );
}
