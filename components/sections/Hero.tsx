"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--cream)] px-[5vw] pb-28">
      <Navbar />
      <div className="grid items-center gap-16 pt-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <h1 className="font-title leading-[.9]">
            <SplitText text="Maite" delay={0.2} className="block text-[clamp(6rem,15vw,13rem)] italic text-[var(--brown)]" />
            <SplitText text="Galarza Astiz" delay={0.6} className="block text-[clamp(3rem,7.5vw,7rem)] font-light text-[var(--navy)]" />
          </h1>
          <Reveal delay={1.5}>
            <p className="font-body mt-12 max-w-md text-xl leading-relaxed">
              Curiosa, lectora y jinete. Estudio en ORT Belgrano, orientación TIC, y todavía estoy decidiendo entre Historia y Arqueología.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <PhotoSlot src="/images/hero-vitrina.png" alt="Maite frente al espejo, dentro de una vitrina" ratio="5/7" priority className="w-full" />


          <motion.div
            className="absolute -bottom-10 -left-[18%] w-[58%] bg-[#F3EFE6] p-5 shadow-[0_18px_40px_rgba(0,0,0,.25)]"
            initial={{ opacity: 0, y: -80, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ type: "spring", stiffness: 70, damping: 11, delay: 1.7 }}
          >
            <p className="font-title text-xl font-medium text-[var(--navy)]">Maite Galarza Astiz</p>
            <p className="font-body mt-2 text-sm italic leading-snug">
              Buenos Aires, Argentina<br />ORT Belgrano · orientación TIC<br />Historia, código, caballos y perros.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
