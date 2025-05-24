"use client";
import Link from 'next/link';
import { HyperText } from "@/components/magicui/hyper-text";
import { Github } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.9,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

export default function ProjectSection() {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="projectsection"
    >
      <HyperText className="text-center m-10">My Projects</HyperText>

      <div className="flex flex-col justify-center items-center w-auto">
        {/* first Project  */}
        <motion.div
          variants={cardVariants}
          className="bg-slate-50 w-3/4 h-80 rounded-3xl m-5 font-sans"
        >
          <div className="h-1/3 bg-gray-300 rounded-t-3xl flex justify-between p-7">
            <div>
              <h1 className="font-bold text-xl font-sans">uniqueLust</h1>
              <p className="opacity-80">🔒Personal Project</p>
            </div>
            <div className="items-center flex gap-3">
              <div className="bg-black/10 dark:bg-black/10 p-3 rounded-full">
                <Link
                  href="https://github.com/uniquepatel01/foodies"
                  target="_blank"
                >
                  <Github />
                </Link>
              </div>
              <Link href="https://foodies-beryl-three.vercel.app/" target="_blank">
                 link
              </Link>
            </div>
          </div>

          <div className="p-7  ">
            <div className="text-gray-700 mb-4 font-normal font-sans">
              uniquelust is an online platform where people can rent out their
              homes, apartments, or unique spaces to travelers. It allows guests
              to find short-term stays in different locations worldwide, often
              providing a more personal and local experience than hotels.
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-gray-800 text-base mb-2 flex items-center gap-2">
                Tech & Skill
              </h1>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  NodeJs
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Express
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  MongoDb
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Ejs
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* second Project  */}

        <motion.div
          variants={cardVariants}
          className="bg-slate-50 w-3/4 h-80 rounded-3xl m-5 font-sans"
        >
          <div className="h-1/3 bg-gray-300 rounded-t-3xl flex justify-between p-7">
            <div>
              <h1 className="font-bold text-xl font-sans">Foodies</h1>
              <p className="opacity-80">🔒Personal Project</p>
            </div>
            <div className="items-center flex gap-3">
              <div className="bg-black/10 dark:bg-black/10 p-3 rounded-full">
                <Link
                  href="https://github.com/uniquepatel01/uniquelust"
                  target="_blank"
                >
                  <Github />
                </Link>
              </div>
              <Link href="https://uniquelust.onrender.com/" target="_blank">
                live
              </Link>
            </div>
          </div>

          <div className="p-7  ">
            <div className="text-gray-700 mb-4 font-normal font-sans">
              The Foodies repository is a modern landing page project built
              using React, Vite, and Tailwind CSS. It offers a clean, responsive
              design suitable for food-related businesses or portfolios. The
              project is optimized for fast performance and easy customization,
              making it a great starting point for web developers.
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-gray-800 text-base mb-2 flex items-center gap-2">
                Tech & Skill
              </h1>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  React
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Javascript
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Framer Motion
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                  Magic Ui
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
