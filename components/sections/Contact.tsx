"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="bg-contacto grid min-h-screen place-items-center px-[4vw] py-20">
      <motion.a
        href="mailto:m.galarza.astiz@gmail.com"
        aria-label="Escribirle a Maite por mail"
        className="relative block w-[min(92vw,1000px)] drop-shadow-2xl"
        style={{ aspectRatio: "8/5" }}
        initial={{ y: 260, rotate: 10, opacity: 0 }}
        whileInView={{ y: 0, rotate: -3, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 55, damping: 13 }}
        whileHover={{ rotate: -1, y: -12, scale: 1.02 }}
      >
        <Image src="/fondos/carta.png" alt="Carta dirigida a Maite Galarza Astiz, m.galarza.astiz@gmail.com" fill className="object-contain" />
      </motion.a>
    </section>
  );
}
