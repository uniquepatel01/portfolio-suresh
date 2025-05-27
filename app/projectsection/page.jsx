"use client";
import Link from 'next/link';
import { HyperText } from "@/components/magicui/hyper-text";
import { Github } from "lucide-react";
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
      className="px-2"
    >
      <HyperText className="text-center m-6 sm:m-10">My Projects</HyperText>

      <div className="flex flex-col justify-center items-center w-full">
        {/* first Project  */}
        <motion.div
          variants={cardVariants}
          className="bg-slate-50 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-3xl m-3 sm:m-5 font-sans shadow-md"
        >
          <div className="h-auto sm:h-1/3 bg-gray-300 rounded-t-3xl flex flex-col sm:flex-row justify-between p-5 sm:p-7 gap-4">
            <div>
              <h1 className="font-bold text-lg sm:text-xl font-sans">uniqueLust</h1>
              <p className="opacity-80 text-sm sm:text-base">🔒Personal Project</p>
            </div>
            <div className="items-center flex gap-3">
              <div className="bg-black/10 dark:bg-black/10 p-2 sm:p-3 rounded-full">
                <Link
                  href="https://github.com/uniquepatel01/foodies"
                  target="_blank"
                >
                  <Github />
                </Link>
              </div>
              <Link
                href="https://foodies-beryl-three.vercel.app/"
                target="_blank"
                className="text-blue-600 underline text-sm sm:text-base"
              >
                link
              </Link>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <div className="text-gray-700 mb-4 font-normal font-sans text-sm sm:text-base">
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
          className="bg-slate-50 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-3xl m-3 sm:m-5 font-sans shadow-md"
        >
          <div className="h-auto sm:h-1/3 bg-gray-300 rounded-t-3xl flex flex-col sm:flex-row justify-between p-5 sm:p-7 gap-4">
            <div>
              <h1 className="font-bold text-lg sm:text-xl font-sans">Foodies</h1>
              <p className="opacity-80 text-sm sm:text-base">🔒Personal Project</p>
            </div>
            <div className="items-center flex gap-3">
              <div className="bg-black/10 dark:bg-black/10 p-2 sm:p-3 rounded-full">
                <Link
                  href="https://github.com/uniquepatel01/uniquelust"
                  target="_blank"
                >
                  <Github />
                </Link>
              </div>
              <Link
                href="https://uniquelust.onrender.com/"
                target="_blank"
                className="text-blue-600 underline text-sm sm:text-base"
              >
                live
              </Link>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <div className="text-gray-700 mb-4 font-normal font-sans text-sm sm:text-base">
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
