"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import LocalTime from "./LocalTime";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 flex justify-between items-center p-3 shadow-md bg-white/20 backdrop-blur-md border border-white/30 rounded-[20px] mt-1 mb-5 transition-all duration-300
                ${scrolled ? "w-3/5" : "w-4/5"}`}
            style={{
                left: "50%",
                transform: "translateX(-50%)"
            }}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Image className="h-10 w-10 rounded-full" src="/images/logo.png" alt="logo" width={40} height={40} />
                <p className="font-pacifico text-gray-400">uniquepatel01</p>
            </div>

            {/* Local Time */}
            <div>
                <LocalTime />
            </div>

            {/* Navigation links and dark mode toggle */}
            <div className="flex items-center gap-4 font-geist-mono">
                <Link href="/" className="no-underline text-inherit">Home</Link>
                <Link href="#projectsection" className="no-underline text-inherit">Project</Link>
                <Link href="/contact" className="no-underline text-inherit">Contact</Link>
                <button
                    aria-label="Toggle Dark Mode"
                    className="bg-transparent border-0 cursor-pointer"
                >
                    🌙
                </button>
            </div>
        </nav>
    );
}