"use client";
import { motion } from "framer-motion";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";

function Paw({ left, top, rotate, delay }: { left: string; top: string; rotate: number; delay: number }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className="absolute w-12"
      style={{ left, top, rotate, fill: "rgba(255,255,255,.28)" }}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <ellipse cx="20" cy="26" rx="9" ry="7.5" />
      <circle cx="8" cy="17" r="4" /><circle cx="15" cy="10" r="4" /><circle cx="25" cy="10" r="4" /><circle cx="32" cy="17" r="4" />
    </motion.svg>
  );
}


const paws = Array.from({ length: 9 }, (_, i) => ({
  left: `${i * 10}%`,
  top: `${88 - i * 9 + (i % 2 ? 6 : -4)}%`,
  rotate: 35,
  delay: 0.3 + i * 0.25,
}));

export default function Animals() {
  return (
    <section id="animales" className="overflow-hidden bg-[var(--terra)] px-[5vw] py-24 text-[#EFE6D6]">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Reveal><h2 className="font-title text-[clamp(4.5rem,9vw,8rem)] italic leading-none">Animales</h2></Reveal>
          <Reveal delay={0.15}><p className="font-title mt-12 max-w-md text-3xl italic leading-snug">Desde chica tengo un cariño especial por los animales.</p></Reveal>
          <Reveal delay={0.3}>
            <p className="font-body mt-6 max-w-md text-lg leading-relaxed opacity-90">
              Mis perros son parte de mi familia y crecer con ellos me enseñó a cuidarlos, a tenerles paciencia y a entender lo que necesitan. Ese cariño es también lo que me llevó a interesarme por el bienestar animal y a sumarme a hunda.
            </p>
          </Reveal>
          <div className="relative mt-10 hidden h-72 max-w-md lg:block">
            {paws.map((p, i) => <Paw key={i} {...p} />)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <PhotoSlot src="/animales/animales1.png" alt="Perro pastor alemán recostado" ratio="5/3" className="col-span-2" />
          <PhotoSlot src="/animales/animales2.png" alt="Perra negra recostada" ratio="10/11" delay={0.15} />
          <PhotoSlot src="/animales/animales3.png" alt="Retrato de perra negra" ratio="10/11" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
