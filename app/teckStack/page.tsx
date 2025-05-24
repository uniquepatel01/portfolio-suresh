"use client"

import { usePathname } from "next/navigation";
import {
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Github,
  Twitter,
  Linkedin,
  LucideInstagram,
} from "lucide-react";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiFramer,
  SiPrisma,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function TechStack() {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname} // <-- This triggers animation on navigation!
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center font-sans"
    >
      <h1 className="text-5xl font-bold mt-10 mb-4 font-sans text-black text-center">
        Tech Stack
      </h1>
      <p className="text-gray-500 text-lg mb-10 text-center font-geist">
        The tools and technologies I use to build modern, scalable, and
        beautiful web applications.
      </p>
      <div
        className="w-[90vw] max-w-6xl rounded-[28px] border border-lime-300 shadow-xl bg-white/80 mx-auto mb-10 p-6 flex flex-col items-center"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
      >
        <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-[24px] p-8 flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
            <TechBadge
              icon={<FaJs className="text-yellow-400" />}
              label="JavaScript"
            />
            <TechBadge
              icon={<SiTailwindcss className="text-cyan-400" />}
              label="Tailwind"
            />
            <TechBadge
              icon={<FaReact className="text-blue-400" />}
              label="React"
            />
            <TechBadge
              icon={<FaNodeJs className="text-green-600" />}
              label="Node.js"
            />
            <TechBadge
              icon={<SiExpress className="text-gray-700" />}
              label="Express.js"
            />
            <TechBadge
              icon={<SiTypescript className="text-blue-600" />}
              label="TypeScript"
            />
            <TechBadge
              icon={<SiMongodb className="text-green-700" />}
              label="MongoDB"
            />
            <TechBadge
              icon={<SiNextdotjs className="text-black" />}
              label="Next.js"
            />
            <TechBadge
              icon={<SiFramer className="text-blue-500" />}
              label="Framer"
            />
            <TechBadge
              icon={<SiPrisma className="text-indigo-900" />}
              label="Prisma"
            />
            {/* <TechBadge icon={<FaAws className="text-yellow-500" />} label="AWS" /> */}
            {/* <TechBadge icon={<SiCloudflare className="text-orange-400" />} label="Cloudflare" /> */}
            {/* <TechBadge icon={<SiRedis className="text-red-600" />} label="Redis" /> */}
            {/* <TechBadge icon={<SiPostgresql className="text-blue-900" />} label="PostgreSQL" /> */}
            <TechBadge
              icon={<SiFirebase className="text-yellow-500" />}
              label="Firebase"
            />
            {/* <TechBadge icon={<FaRust className="text-orange-700" />} label="Rust" /> */}
            {/* <TechBadge icon={<FaLinux className="text-yellow-600" />} label="Linux" /> */}
            <TechBadge
              icon={<SiSupabase className="text-green-500" />}
              label="Supabase"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold font-serif ">Suresh Kumar</h2>
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
        <p className="text-gray-500 text-sm mt-2">
          © 2025. Made with <span className="text-red-500">♥</span> by
          uniquepatel01
        </p>
      </div>
    </motion.div>
  );
}

function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl shadow font-medium text-base font-geist-mono">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
