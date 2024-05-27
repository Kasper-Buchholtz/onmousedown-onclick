"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

export default function Cases() {
  
  /* Scale data-gsap-scale smoothly on page enter using gsap */
  useEffect(() => {
    gsap.from(".data-gsap-scale", {
      opacity: 0, // Start from opacity 0
      scale: 0, // Start from scale 0
      duration: 1, // Animation duration to scale up
      ease: "back.out(1.7)", // Easing function for a nice "pop" effect
      // You can adjust the starting scale, duration, and ease type as needed
    });
    gsap.to(".data-gsap-scale", {
      opacity: 1, // Start from opacity 0
      scale: 1, // Scale to 1
      duration: 1, // Animation duration to scale up
      ease: "back.out(1.7)", // Easing function for a nice "pop" effect
      // You can adjust the starting scale, duration, and ease type as needed
    });
  }, []);
  
  let heading = "Dit website er et af de vigtigste touchpoints.";
  let subheading =
    " Aute sint do excepteur sunt irure occaecat nostrud duis. Culpa cillum eu nisi voluptate veniam excepteur. Ut elit aliquip quis. Lorem veniam voluptate occaecat ex exercitation voluptate deserunt incididunt ut pariatur dolor velit fugiat sit.";
  let imageurl =
    "https://assets.lummi.ai/assets/QmX2eqqg7pxtpJFWVwc9ku6FqYvo72LC5xuKvJmDMCbrYy?auto=format&w=1500";
  return (
    <>
      <section className="min-h-screen h-[200vh]">
        <div  className="absolute data-gsap-scale  top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 h-[calc(100vh/1.2)] rounded-full overflow-hidden aspect-square">
          <Image
            
            className="bg-cover  object-cover"
            fill
            src={imageurl}
            alt={""}
          />
        </div>
      </section>
    </>
  );
}
