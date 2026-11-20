"use client";
import { motion } from "framer-motion";

// Cada letra sube desde una máscara. Las palabras nunca se parten: el salto de línea solo puede ocurrir entre palabras,
// y el contenedor tiene nowrap en línea (style), así no depende de que Tailwind genere la clase.
export default function SplitText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  let offset = 0;
  const starts = words.map((w) => { const s = offset; offset += w.length + 1; return s; });

  return (
    <span className={className} style={{ whiteSpace: "nowrap" }} aria-label={text}>
      {words.map((word, w) => (
        <span key={w} aria-hidden style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: w < words.length - 1 ? "0.25em" : 0 }}>
          {word.split("").map((c, j) => (
            <span key={j} className="inline-block overflow-hidden px-[0.04em] py-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: delay + (starts[w] + j) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {c}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
