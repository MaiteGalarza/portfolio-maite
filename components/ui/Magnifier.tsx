"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const R = 115;    // radio de la lupa (px)
const ZOOM = 1.7; // cuánto agranda

export default function Magnifier({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [on, setOn] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 450, damping: 38 });
  const y = useSpring(my, { stiffness: 450, damping: 38 });
  const lensX = useTransform(x, (v) => v - R);
  const lensY = useTransform(y, (v) => v - R);
  const innerX = useTransform(x, (v) => -(v - R));
  const innerY = useTransform(y, (v) => -(v - R));
  const origin = useTransform([x, y], ([a, b]: number[]) => `${a}px ${b}px`);

  useEffect(() => {
    const el = ref.current!;
    const ro = new ResizeObserver(() => setSize({ w: el.offsetWidth, h: el.offsetHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return; // en touch no hay lupa
    const r = ref.current!.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
    setOn(true);
  };

  return (
    <div ref={ref} className={`relative overflow-hidden [@media(hover:hover)]:cursor-none ${className}`} onPointerMove={move} onPointerLeave={() => setOn(false)}>
      {children}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0"
        style={{ x: lensX, y: lensY, width: R * 2, height: R * 2 }}
        animate={{ scale: on ? 1 : 0, opacity: on ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* vidrio: copia agrandida del contenido, alineada con el original */}
        <div className="absolute inset-0 overflow-hidden rounded-full bg-[#EDE3D1]">
          <motion.div className="absolute left-0 top-0" style={{ x: innerX, y: innerY, width: size.w, height: size.h, transformOrigin: origin, scale: ZOOM }}>
            {children}
          </motion.div>
        </div>
        {/* aro + mango */}
        <div className="absolute inset-0 rounded-full border-[10px] border-[#2E211B] shadow-[0_10px_30px_rgba(0,0,0,.25)]" />
        <div className="absolute left-[88%] top-[88%] h-[14px] w-[110px] origin-left rotate-45 rounded-full bg-[#2E211B]" />
      </motion.div>
    </div>
  );
}
