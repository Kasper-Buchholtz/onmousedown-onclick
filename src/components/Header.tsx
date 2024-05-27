"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.header
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "tween", duration: 1, ease: [0.77, 0, 0.18, 1] }}
          className="fixed w-full top-0 z-50  flex justify-between px-16 py-4 text-light"
        >
          <div className={`z-50 mix-blend-difference relative ${isNavOpen ? "text-dark" : ""}`}>
            <Link href={"/"}>logo</Link>
          </div>

          <button
            className={`z-50  py-4 px-4 relative ${
              isNavOpen ? "text-dark" : ""
            }`}
            onClick={toggleNav}
          >
            {isNavOpen ? "close" : "menu"}
          </button>

          <AnimatePresence mode="sync">
            {isNavOpen && <Nav toggleNav={toggleNav} />}
          </AnimatePresence>
        </motion.header>
      </AnimatePresence>
    </>
  );
}

var links = [
  {
    name: "Home",
    href: "/",
    image: "https://source.unsplash.com/random/?furniture&4",
  },
  {
    name: "Cases",
    href: "/cases",
    image: "https://source.unsplash.com/random/?furniture&5",
  },
  {
    name: "About us",
    href: "/about",
    image: "https://source.unsplash.com/random/?furniture&6",
  },
  {
    name: "Karriere",
    href: "/karriere",
    image: "https://source.unsplash.com/random/?furniture&7",
  },
  {
    name: "Superego",
    href: "/superego",
    image: "https://source.unsplash.com/random/?furniture&8",
  },
/*   {
    name: "Kontakt",
    href: "/kontakt",
    image: "https://source.unsplash.com/random/?furniture&9",
  }, */
  {
    name: "uch",
    href: "/uch",
    image: "https://source.unsplash.com/random/?furniture&63",
  },
  {
    name: "Fish",
    href: "/fish",
    image: "https://source.unsplash.com/random/?furniture&631",
  }
];

interface NavProps {
  toggleNav: () => void;
}

function Nav({ toggleNav }: NavProps) {
  return (
    <>
      <motion.button
        onClick={toggleNav}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "tween", duration: 1, ease: [0.77, 0, 0.18, 1] }}
        className=" h-screen w-full fixed  block bg-dark/80 top-0 right-0 "
      ></motion.button>
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "tween", duration: 1, ease: [0.77, 0, 0.18, 1] }}
        className="px-20 bg-light fixed right-0 top-0 p-4 text-dark w-full pt-32 h-96"
      >
        <ul className="flex gap-6 flex-wrap overflow-hidden w-1/2 2xl:w-1/3 ">
          {links.map((link, index) => (
            <li key={index} className="group">
              <Link
                onClick={toggleNav}
                className="xl:text-6xl lg:text-4xl overflow-hidden block"
                href={link.href}
              >
                <motion.span
                  className="overflow-hidden block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{
                    delay: 0.9 + index / 8,
                    ease: [0.77, 0, 0.18, 1],
                  }}
                >
                  {link.name}
                </motion.span>
              </Link>
              <img
                className={`absolute p-4 top-0 right-0 w-auto h-full bg-cover object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                src={link.image}
              />
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
