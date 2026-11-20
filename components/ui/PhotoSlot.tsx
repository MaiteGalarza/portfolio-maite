"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;       // archivo exportado de Figma, en /public/images
  alt: string;
  ratio: string;     // proporción del export, ej. "5/7" (ancho/alto) → evita saltos de layout
  className?: string;
  delay?: number;
  rotate?: number;
  priority?: boolean;
};

export default function PhotoSlot({ src, alt, ratio, className = "", delay = 0, rotate = 0, priority }: Props) {
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
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority={priority} />
    </motion.div>
  );
}
