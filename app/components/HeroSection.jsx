"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
import Typewriter from "typewriter-effect";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { FlipText } from "@/components/magicui/flip-text";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Github,
  Twitter,
  Linkedin,
  LucideInstagram,
  Globe,
} from "lucide-react";
import LocalTime from "./LocalTime";
import { FlipWords } from "@/components/ui/flip-word";

export default function HeroSection() {
  // Change this array to update the typewriter text
  const words = [
    { text: "Full-stack dev" },
    { text: "Tech enthusiast" },
    { text: "PassionateDeveloper" },
  ];
  const words2 = [
    { text: "Programmers never die, they just go offline" },
    { text: "When in doubt, Ctrl+Z it out!" },
    { text: "I'm not a bug, I'm a feature!" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex justify-center mb-40"
    >
      <div className="w-3/4 flex flex-col justify-center ">
        <div className="text-6xl text-center m-5">
          <h1 className="font-bold font-serif text-black mb-5">SURESH</h1>
          {/* <FlipText className="font-bold">Suresh</FlipText> */}
          <h1 className="font-pacifico text-red-400">
            <FlipWords words={words.map((word) => word.text)} />
          </h1>
        </div>

        <div className="bg-gray-500 h-1 w-full rounded-full"></div>

        <div className=" flex justify-center text-center m-5 ">
          <p className="w-3/5 text-lg text-gray-500 font-mono">
            Hey, I'm Suresh a passionate full-stack developer who thrives on
            building meaningful & useful web apps. I love turning bold ideas
            into real-world solution 🧡🧡.........
          </p>
        </div>

        <div className=" text-center font-bold text-chart-3 text-2xl font-ubuntu m-3">
          <Typewriter
            options={{
              strings: words2.map((word2) => word2.text),
              autoStart: true,
              loop: true,
              delay: 50, // Lower is faster, higher is slower (default is 75)
              deleteSpeed: 30, // Speed of deleting (default is 50)
            }}
          />
        </div>

        <Dock className="border-2 bg-blue-50">
          <DockIcon
            className="bg-black/10 dark:bg-black/10 text-blue-500"
            onClick={() =>
              window.open("https://twitter.com/uniquepatel01", "_blank")
            }
          >
            <Twitter />
          </DockIcon>
          <DockIcon
            className="bg-black/10 dark:bg-black/10"
            onClick={() =>
              window.open("https://github.com/uniquepatel01", "_blank")
            }
          >
            <Github />
          </DockIcon>
          <DockIcon
            className="bg-black/10 dark:bg-black/10 text-blue-700"
            onClick={() =>
              window.open("https://linkedin.com/in/uniquepatel01", "_blank")
            }
          >
            <Linkedin />
          </DockIcon>
          <DockIcon
            className="bg-black/10 dark:bg-black/10  text-pink-500"
            onClick={() =>
              window.open("https://instagram.com/uniquepatel01", "_blank")
            }
          >
            <LucideInstagram />
          </DockIcon>
        </Dock>

        {/* Local Time */}
        <div className="flex justify-center items-center m-10">
          <LocalTime />
          <p className="font-ubuntu flex gap-1 font-bold text-gray-500">
            {" "}
            <Globe /> Jharkhand, India
          </p>
        </div>
      </div>
    </motion.div>
  );
}
