"use client";
import Lenis from "@studio-freight/lenis";
import styles from "./styles.module.scss";
import Picture1 from "../../../public/images/1.jpeg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const title = "Vi er et bureau, der stiller dig stærkere";
  return (
    <>
      <div ref={container} className="h-[300vh] relative">
        <div className="sticky overflow-hidden top-0 h-screen">
          <motion.div
            style={{ scale }}
            className="w-full h-full top-0 absolute flex items-center justify-center"
          >
            <div className="relative w-[25vw] h-[25vw] rounded-2xl overflow-hidden">
              <video
                className="object-cover w-full h-full"
                src="https://superego.nu/wp-content/uploads/2024/04/se-hero-vid.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-screen" />

      <Popup />
    </>
  );
}

const PopupTitle = "Hvad er din kernefortælling?";
const PopupText =
  "Vi hjælper dig med at definere dit DNA, formulere det til en stærk kernefortælling og efterfølgende formidle det forståeligt og genkendeligt for dine målgrupper.";
const PopupButtonText = "Mere om SuperTour";
function Popup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        duration: 0.7,
        delay: 1,
        ease: [0.08, 0.82, 0.17, 1],
      }}
      className="fixed bottom-0 right-0 p-4 max-w-prose"
    >
      <div className="p-8 bg-light shadow-md rounded-lg space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl pb-2">{PopupTitle}</h1>
          <p className="text-gray-500">{PopupText}</p>
        </div>
        <div>
          <button className="bg-dark px-4 py-3 rounded-full text-light">
            {PopupButtonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
