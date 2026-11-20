"use client";
import { motion } from "framer-motion";

const links = [
  ["Sobre mí", "#sobre-mi"],
  ["Animales", "#animales"],
  ["hunda", "#hunda"],
  ["Contacto", "#contacto"],
];

export default function Navbar() {
  return (
    <motion.header
      className="flex items-center justify-between border-b border-[var(--brown)]/30 py-7"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <a href="#" className="font-title text-2xl tracking-[0.2em]">M·G·A</a>
      <nav className="flex gap-6 font-title text-lg italic md:gap-8">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100">
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
