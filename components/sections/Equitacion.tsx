"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";


function Bar({ n, className = "", vertical = false }: { n: number; className?: string; vertical?: boolean }) {
  return (
    <motion.div
      className={`absolute z-10 flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: n * 0.35, type: "spring" }}
    >
      <div className={`h-4 w-32 border-x-8 border-[var(--terra)] bg-[repeating-linear-gradient(90deg,#1F2A3A_0_28px,#fff_28px_56px)] ${vertical ? "rotate-90" : ""}`} />
      <span className="font-title text-2xl italic">{n}</span>
    </motion.div>
  );
}

export default function Equitacion() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>

      <section ref={ref} className="relative h-[85vh] overflow-hidden bg-[#2a2a1f]">
        <motion.div style={{ y }} className="absolute inset-[-10%]">
          <Image src="/equitacion/equitacionportada.png" alt="Maite saltando a caballo" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute right-[5vw] top-[10%] text-right text-[#F3EBDD]">
          <Reveal><h2 className="font-title text-[clamp(4rem,9vw,8rem)] italic leading-none">Equitación</h2></Reveal>
          <Reveal delay={0.2}><p className="font-title text-2xl italic">A caballo desde los 4 años</p></Reveal>
        </div>
      </section>


      <section className="bg-pista px-[4vw] py-20">
        <div className="relative mx-auto max-w-[1400px] rounded-[60px] border-[6px] border-white px-[6%] py-[6%]">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <motion.rect x="2.5" y="4" width="95" height="92" rx="14" fill="none" stroke="var(--terra)" strokeWidth="2.5" vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.8, ease: "easeInOut" }} />
          </svg>
          <Bar n={1} className="left-1/2 top-[1.5%] -translate-x-1/2" />
          <Bar n={2} className="right-[-3%] top-1/2 -translate-y-1/2" vertical />
          <Bar n={3} className="bottom-[1.5%] left-1/2 -translate-x-1/2" />
          <Bar n={4} className="left-[-3%] top-1/2 -translate-y-1/2" vertical />

          <div className="relative grid grid-cols-[1fr_.8fr_1fr] items-center gap-x-6 gap-y-10">

            <PhotoSlot src="/equitacion/equitacion1.png" alt="Entrada en pista" ratio="3/2" />
            <Reveal className="row-span-2 row-start-1 col-start-2 text-center">
              <p className="font-title text-2xl leading-[1.6]">
                Hago equitación desde los cuatro años. Empecé en el Hípico de San Isidro y a los nueve años me cambié al Club Alemán de Equitación, donde sigo practicando hasta hoy. Es una actividad que me acompaña desde chica, la cual disfruto mucho.
              </p>
            </Reveal>
            <PhotoSlot src="/equitacion/equitacion2.png" alt="Salto de frente" ratio="3/2" delay={0.15} className="col-start-3" />
            <PhotoSlot src="/equitacion/equitacion3.png" alt="Salto en pista" ratio="3/2" delay={0.3} className="row-start-2" />
            <PhotoSlot src="/equitacion/equitacion4.png" alt="Paseo a caballo" ratio="3/2" delay={0.45} className="col-start-3 row-start-2" />
          </div>
        </div>
      </section>
    </>
  );
}
