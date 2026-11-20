"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;       // archivo exportado de Figma, en /public/images
  alt: string;
  ratio: string;     // proporción del export, ej. "5/7" (ancho/alto)
  className?: string;
  delay?: number;
  rotate?: number;
  priority?: boolean;
};

export default function PhotoSlot({ src, alt, ratio, className = "", delay = 0, rotate = 0, priority }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ aspectRatio: ratio }}
      initial={{ opacity: 0, y: 40, rotate: rotate + 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {failed ? (
        // Si no encuentra el archivo, muestra la ruta que está buscando
        <div className="absolute inset-0 grid place-items-center rounded-md border-2 border-dashed border-white/60 bg-black/10 p-3 text-center font-mono text-xs">
          Falta el archivo:<br />public{src}
        </div>
      ) : (
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority={priority} onError={() => setFailed(true)} />
      )}
    </motion.div>
  );
}
