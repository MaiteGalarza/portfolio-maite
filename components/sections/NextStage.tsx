"use client";
import { motion } from "framer-motion";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";

export default function NextStage() {
  return (
    <section className="bg-[var(--cream)] pt-24">
      <div className="grid items-center gap-12 px-[5vw] lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal><h2 className="font-title text-[clamp(3.5rem,7vw,6rem)] italic leading-none">Mi próxima etapa</h2></Reveal>
          <Reveal delay={0.2}>
            <p className="font-body mt-10 max-w-xl text-lg leading-[1.9]">
              Todavía no tengo decidido si voy a estudiar Historia o Arqueología, pero son dos carreras que me interesan muchísimo. Siempre me llamó la atención conocer cómo vivían las civilizaciones antiguas, entender su historia y descubrir más sobre el pasado. A futuro, me gustaría poder estudiar en el exterior, hacer un posgrado en otro país y conocer distintas culturas. Me gustaría tener la oportunidad de seguir aprendiendo, viajar y dedicarme a algo que realmente me guste.
            </p>
          </Reveal>
        </div>

        {/* 📷 MONEDA (export de Figma) → public/images/moneda.png */}
        <Float amp={8} duration={5}>
          <motion.div
            className="mx-auto w-[min(80vw,440px)]"
            initial={{ rotate: -140, scale: 0.6, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotateY: 180 }}
          >
            <PhotoSlot src="/images/moneda.png" alt="Moneda: Historia o Arqueología" ratio="1/1" />
          </motion.div>
        </Float>
      </div>

      {/* 📷 TIRA DE 3 FOTOS (sangrado a los bordes) → public/images/etapa-1..3.png */}
      <div className="mt-24 grid md:grid-cols-3">
        <PhotoSlot src="/images/etapa-1.png" alt="Puente de Brooklyn nublado" ratio="475/360" />
        <PhotoSlot src="/images/etapa-2.png" alt="Atardecer en silueta" ratio="475/360" delay={0.15} />
        <PhotoSlot src="/images/etapa-3.png" alt="Calle empedrada de Colonia" ratio="475/360" delay={0.3} />
      </div>
    </section>
  );
}
