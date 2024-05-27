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
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aef31b65-ba9c-4717-b6d5-4923f40775b5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  let focus =
    "ring-0 ring-primary ring-offset-0 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2";

  return (
    <>
      <AnimatePresence mode="sync">
        <div className="text-center pb-40">
          <h1 className="max-w-prose mx-auto text-balance text-7xl">
            Tryk på knapperne
          </h1>
          <p className="pt-4 text-balance max-w-prose mx-auto text-center">tryk gerne på dem et par gange og skriv hvilken du foretrækker eller synes er mere responsive</p>
        </div>
        <motion.div
          className="fixed top-0 left-0 rounded-xl  w-full h-full bg-primary z-50"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ type: "tween", duration: 1, ease: [0.77, 0, 0.18, 1] }}
        />
        <div className="flex justify-around">
          <CounterOnClick />
          <CounterOnMouseDown />
        </div>
        <div className="pt-40" />
        <div className=" bg-primary px-12 py-12 rounded-xl container  mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <input
              placeholder="navn (behøver du ikke :P )"
              className={`w-full h-16 px-4 py-2 transition-all duration-200 ease-in-out border rounded-md placeholder:text-gray-300 text-dark disabled:opacity-50 disabled:cursor-not-allowed ${focus}`}
              type="text"
              name="name"
            />
            <input
              placeholder="Højre eller venstre?"
              className={`w-full h-16 px-4 py-2 transition-all duration-200 ease-in-out border rounded-md placeholder:text-gray-300 text-dark disabled:opacity-50 disabled:cursor-not-allowed ${focus}`}
              type="text" name="hvilken"
            />
            </div>

            <button className=" mt-8 px-5 w-full py-2 bg-dark rounded justify-center items-center gap-2.5 inline-flex text-white transition-colors font-light border border-dark hover:bg-dark/70 active:bg-dark" type="submit">Send</button>
          </form>
        </div>
        {/* <Grid /> */}
        {/* <Hero /> */}
      </AnimatePresence>
    </>
  );
}
